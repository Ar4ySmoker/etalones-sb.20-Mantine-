// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
// import { manrope } from '@/app/ui/fonts';

import { ColorSchemeScript, MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
export const metadata = {
  title: 'Etalones S&B',
  description: 'Легальная работа в Европе',
};



const myColor: MantineColorsTuple = [
  '#feebeb',
  '#f7d3d3',
  '#f4a2a2',
  '#f26f6e',
  '#f14642',
  '#f03027',
  '#f1251a',
  '#d61b10',
  '#bf140d',
  '#a70707'
];

const theme = createTheme({
  colors: {
    myColor,
  }
});



export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
      </head>
      <body
      // className={`${manrope.className} antialiased`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}