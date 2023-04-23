var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MMarochov/cv.git', // Update to point to your repository  
        user: {
            name: 'Mel Marochov', // update to use your name
            email: 'mel.marochov@os.uk' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)