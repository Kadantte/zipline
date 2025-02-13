import {
  Icon,
  IconBracketsContain,
  IconBrandGolang,
  IconBrandKotlin,
  IconBrandPowershell,
  IconBrandPython,
  IconBrandRust,
  IconBrandTypescript,
  IconFileCode,
  IconFileCode2,
  IconFileText,
  IconFileTypeCss,
  IconFileTypeCsv,
  IconFileTypeDocx,
  IconFileTypeHtml,
  IconFileTypeJs,
  IconFileTypeJsx,
  IconFileTypePhp,
  IconFileTypePpt,
  IconFileTypeRs,
  IconFileTypeSql,
  IconFileTypeXls,
  IconFileTypeXml,
  IconFileUnknown,
  IconFileZip,
  IconMarkdown,
  IconMusic,
  IconPhoto,
  IconTerminal2,
  IconTex,
  IconVideo,
} from '@tabler/icons-react';

const genericIcons: Record<string, Icon> = {
  video: IconVideo,
  image: IconPhoto,
  audio: IconMusic,
  text: IconFileText,
};

const icons: Record<string, Icon> = {
  // common compressed files
  'application/zip': IconFileZip,
  'application/x-7z-compressed': IconFileZip,
  'application/x-rar-compressed': IconFileZip,
  'application/x-tar': IconFileZip,
  'application/x-bzip2': IconFileZip,
  'application/x-gzip': IconFileZip,

  // common text/document files that are not detected by the 'text' type
  'application/pdf': IconFileText,
  'application/msword': IconFileTypeDocx,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': IconFileTypeDocx,
  'application/vnd.ms-excel': IconFileTypeXls,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': IconFileTypeXls,
  'application/vnd.ms-powerpoint': IconFileTypePpt,
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': IconFileTypePpt,
  'text/csv': IconFileTypeCsv,

  // other random stuff
  'text/x-sql': IconFileTypeSql,
  'text/css': IconFileTypeCss,
  'text/html': IconFileTypeHtml,
  'text/x-rust': IconFileTypeRs,
  'application/js': IconFileTypeJs,
  'text/javascript': IconFileTypeJs,
  'application/json': IconBracketsContain,
  'text/xml': IconFileTypeXml,

  // zipline text uploads
  'text/x-zipline-html': IconFileTypeHtml,
  'text/x-zipline-css': IconFileTypeCss,
  'text/x-zipline-javascript': IconFileTypeJs,
  'text/x-zipline-python': IconBrandPython,
  'text/x-zipline-markdown': IconMarkdown,
  'text/x-zipline-httpd-php': IconFileTypePhp,
  'text/x-zipline-sass': IconFileTypeCss,
  'text/x-zipline-scss': IconFileTypeCss,
  'text/x-zipline-typescript': IconBrandTypescript,
  'text/x-zipline-go': IconBrandGolang,
  'text/x-zipline-rustsrc': IconBrandRust,
  'text/x-zipline-sh': IconTerminal2,
  'text/x-zipline-json': IconFileCode2,
  'text/x-zipline-powershell': IconBrandPowershell,
  'text/x-zipline-sql': IconFileTypeSql,
  'text/x-zipline-kotlin': IconBrandKotlin,
  'text/x-zipline-jsx': IconFileTypeJsx,
  'text/x-zipline-plain': IconFileText,
  'text/x-zipline-latex': IconTex,

  'text/x-zipline-c++src': IconFileCode,
  'text/x-zipline-ruby': IconFileCode,
  'text/x-zipline-java': IconFileCode,
  'text/x-zipline-csrc': IconFileCode,
  'text/x-zipline-swift': IconFileCode,
  'text/x-zipline-yaml': IconFileCode,
  'text/x-zipline-dockerfile': IconFileCode,
  'text/x-zipline-lua': IconFileCode,
  'text/x-zipline-nginx-conf': IconFileCode,
  'text/x-zipline-perl': IconFileCode,
  'text/x-zipline-rsrc': IconFileCode,
  'text/x-zipline-scala': IconFileCode,
  'text/x-zipline-groovy': IconFileCode,
  'text/x-zipline-haskell': IconFileCode,
  'text/x-zipline-elixir': IconFileCode,
  'text/x-zipline-vim': IconFileCode,
  'text/x-zipline-matlab': IconFileCode,
  'text/x-zipline-dart': IconFileCode,
  'text/x-zipline-handlebars-template': IconFileCode,
  'text/x-zipline-hcl': IconFileCode,
  'text/x-zipline-http': IconFileCode,
  'text/x-zipline-ini': IconFileCode,
  'text/x-zipline-coffeescript': IconFileCode,

  // feel free to PR more icons if you want :D
};

export default function fileIcon(type: string): Icon {
  const icon = icons[type] || genericIcons[type.split('/')[0]] || IconFileUnknown;

  return icon;
}
