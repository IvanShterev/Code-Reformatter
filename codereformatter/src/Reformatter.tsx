import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';

export const formatJavaScriptCode = (code: string): Promise<string> => {

    return prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
        semi: true,
        singleQuote: true,
        tabWidth: 4,
    });
};

export const formatPythonCode = (code: string): Promise<string> => {

    return prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
        semi: true,
        singleQuote: true,
        tabWidth: 4,
    });
};

export const formatJavaCode = (code: string): Promise<string> => {

    return prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
        semi: true,
        singleQuote: true,
        tabWidth: 4,
    });
};

export const formatHTMLCode = (code: string): Promise<string> => {

    return prettier.format(code, {
        parser: 'html',
        plugins: [parserBabel],
        tabWidth: 4,
    });
};

export const formatCSStCode = (code: string): Promise<string> => {

    return prettier.format(code, {
        parser: 'css',
        plugins: [parserBabel],
        tabWidth: 4,
    });
};