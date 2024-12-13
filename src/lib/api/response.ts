import { ApiAuthOauthResponse } from '@/pages/api/auth/oauth';

import { ApiAuthInvitesResponse } from '@/server/routes/api/auth/invites';
import { ApiAuthInvitesIdResponse } from '@/server/routes/api/auth/invites/[id]';
import { ApiLoginResponse } from '@/server/routes/api/auth/login';
import { ApiLogoutResponse } from '@/server/routes/api/auth/logout';
import { ApiAuthRegisterResponse } from '@/server/routes/api/auth/register';
import { ApiAuthWebauthnResponse } from '@/server/routes/api/auth/webauthn';
import { ApiHealthcheckResponse } from '@/server/routes/api/healthcheck';
import { ApiServerClearTempResponse } from '@/server/routes/api/server/clear_temp';
import { ApiServerClearZerosResponse } from '@/server/routes/api/server/clear_zeros';
import { ApiServerImportV3 } from '@/server/routes/api/server/import/v3';
import { ApiServerRequerySizeResponse } from '@/server/routes/api/server/requery_size';
import { ApiServerSettingsResponse } from '@/server/routes/api/server/settings';
import { ApiServerThumbnailsResponse } from '@/server/routes/api/server/thumbnails';
import { ApiSetupResponse } from '@/server/routes/api/setup';
import { ApiStatsResponse } from '@/server/routes/api/stats';
import { ApiUploadResponse } from '@/server/routes/api/upload';
import { ApiUserResponse } from '@/server/routes/api/user';
import { ApiUserExportResponse } from '@/server/routes/api/user/export';
import { ApiUserFilesResponse } from '@/server/routes/api/user/files';
import { ApiUserFilesIdResponse } from '@/server/routes/api/user/files/[id]';
import { ApiUserFilesIdPasswordResponse } from '@/server/routes/api/user/files/[id]/password';
import { ApiUserFilesIncompleteResponse } from '@/server/routes/api/user/files/incomplete';
import { ApiUserFilesTransactionResponse } from '@/server/routes/api/user/files/transaction';
import { ApiUserFoldersResponse } from '@/server/routes/api/user/folders';
import { ApiUserFoldersIdResponse } from '@/server/routes/api/user/folders/[id]';
import { ApiUserMfaPasskeyResponse } from '@/server/routes/api/user/mfa/passkey';
import { ApiUserMfaTotpResponse } from '@/server/routes/api/user/mfa/totp';
import { ApiUserRecentResponse } from '@/server/routes/api/user/recent';
import { ApiUserSessionsResponse } from '@/server/routes/api/user/sessions';
import { ApiUserStatsResponse } from '@/server/routes/api/user/stats';
import { ApiUserTagsResponse } from '@/server/routes/api/user/tags';
import { ApiUserTagsIdResponse } from '@/server/routes/api/user/tags/[id]';
import { ApiUserTokenResponse } from '@/server/routes/api/user/token';
import { ApiUserUrlsResponse } from '@/server/routes/api/user/urls';
import { ApiUserUrlsIdResponse } from '@/server/routes/api/user/urls/[id]';
import { ApiUsersResponse } from '@/server/routes/api/users';
import { ApiUsersIdResponse } from '@/server/routes/api/users/[id]';
import { ApiVersionResponse } from '@/server/routes/api/version';

export type Response = {
  '/api/auth/invites/[id]': ApiAuthInvitesIdResponse;
  '/api/auth/invites': ApiAuthInvitesResponse;
  '/api/auth/register': ApiAuthRegisterResponse;
  '/api/auth/webauthn': ApiAuthWebauthnResponse;
  '/api/auth/oauth': ApiAuthOauthResponse;
  '/api/auth/login': ApiLoginResponse;
  '/api/auth/logout': ApiLogoutResponse;
  '/api/user/mfa/passkey': ApiUserMfaPasskeyResponse;
  '/api/user/mfa/totp': ApiUserMfaTotpResponse;
  '/api/user/folders/[id]': ApiUserFoldersIdResponse;
  '/api/user/folders': ApiUserFoldersResponse;
  '/api/user/files/[id]/password': ApiUserFilesIdPasswordResponse;
  '/api/user/files/[id]': ApiUserFilesIdResponse;
  '/api/user/files/transaction': ApiUserFilesTransactionResponse;
  '/api/user/files/incomplete': ApiUserFilesIncompleteResponse;
  '/api/user/files': ApiUserFilesResponse;
  '/api/user/urls/[id]': ApiUserUrlsIdResponse;
  '/api/user/urls': ApiUserUrlsResponse;
  '/api/user/tags/[id]': ApiUserTagsIdResponse;
  '/api/user/tags': ApiUserTagsResponse;
  '/api/user/sessions': ApiUserSessionsResponse;
  '/api/user': ApiUserResponse;
  '/api/user/stats': ApiUserStatsResponse;
  '/api/user/recent': ApiUserRecentResponse;
  '/api/user/token': ApiUserTokenResponse;
  '/api/user/export': ApiUserExportResponse;
  '/api/users': ApiUsersResponse;
  '/api/users/[id]': ApiUsersIdResponse;
  '/api/server/clear_temp': ApiServerClearTempResponse;
  '/api/server/clear_zeros': ApiServerClearZerosResponse;
  '/api/server/requery_size': ApiServerRequerySizeResponse;
  '/api/server/settings': ApiServerSettingsResponse;
  '/api/server/thumbnails': ApiServerThumbnailsResponse;
  '/api/server/import/v3': ApiServerImportV3;
  '/api/healthcheck': ApiHealthcheckResponse;
  '/api/setup': ApiSetupResponse;
  '/api/upload': ApiUploadResponse;
  '/api/version': ApiVersionResponse;
  '/api/stats': ApiStatsResponse;
};
