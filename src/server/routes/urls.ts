import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function urlsRoute(this: FastifyInstance, req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: string };
  if (id === '') return reply.notFound();
  else if (id === 'dashboard' && !this.config.features.headless && this.config.urls.route === '/')
    return this.nextServer.render(req.raw, reply.raw, '/dashboard');

  const url = await this.prisma.url.findFirst({
    where: {
      OR: [{ id }, { vanity: decodeURI(encodeURI(id)) }, { invisible: { invis: decodeURI(encodeURI(id)) } }],
    },
  });
  if (!url) return reply.notFound();

  return await reply.redirect(url.destination);
}

export async function urlsRouteOnResponse(
  this: FastifyInstance,
  req: FastifyRequest,
  reply: FastifyReply,
  done: () => void,
) {
  if (reply.statusCode === 302) {
    const { id } = req.params as { id: string };

    const url = await this.prisma.url.findFirst({
      where: {
        OR: [{ id }, { vanity: id }, { invisible: { invis: decodeURI(id) } }],
      },
    });
    await reply.postUrl(url);
  }

  done();
}
