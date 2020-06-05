const withImages = require('next-images')


module.exports = withImages({
    webpack:(config, options)=>{
        
        config.module.rules.push(
            {
                test: /\.js$/,
                include: [
                    /node_modules/
                ],
                loader: 'babel-loader'
            }
        )
        return config
    }
})
