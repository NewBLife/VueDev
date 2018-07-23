import Top from './pages/top';
import About from './pages/about';
import Contract from './pages/contract';
import Userinfo from './pages/userinfo';
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }
const UserPostsHelp = { template: '<div>Posts Help</div>' }

export default [{
        path: '/',
        component: Top
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contract',
        component: Contract
    },
    {
        path: '/user/:userId',
        name: 'user',
        component: Userinfo,
        children: [{
                path: 'profiles',
                name: 'userprofile',
                component: UserProfile
            },
            {
                path: 'posts',
                name: 'userpost',
                components: {
                    default: UserPosts,
                    helper: UserPostsHelp
                }
            }
        ]
    }
]