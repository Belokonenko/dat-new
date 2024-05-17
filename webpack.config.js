const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        registration: './src/js/registration.js',
        contacts: './src/js/contacts.js',
        catalogContent: './src/js/catalogContent.js',
        account: './src/js/accaunt.js'
    },
    output: {
        filename: '[name].bundle.js',
    },

    module: {
        rules : [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

module.exports = config;
