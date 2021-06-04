const mongoose = require('mongoose');

var User = new mongoose.Schema([
    { id: String }
])

var Brand = new mongoose.Schema([{
    userId: String,
    brandName: String,

}])

var influencers = new mongoose.Schema([{
    name: String,
    socialName: String,
    followersRange: Number,
    engagementRate: Number,
    platform: String,
    interest: String,
    Demographics: {
        language: String,
        country: String,
        age: Number,
        gender: String,
        avgLikes: Number,
        avgcomment_counts: Number,
        totalPost: Number,
    }

}])

var post = new mongoose.Schema([{

    campaignId: String,
    influencerId: String,
    type: String,
    value: String,
    dateTobePosted: String,
    reviewStatus: String,

}])

var Campaign = new mongoose.Schema([{

    campaignTitle: String,
    brandId: String,
    objective: String,
    typeOfContent: String,
    // deliverables: [{

    //   //deliverable details
    // }],
    brief: String,
    tags: [{
        //tags details
    }],
    hashtags: [{
        //HashTag Details.
    }],
    redirectionUrl: String,
    sampleContent: [{

    }],
    barter: String,
    pricing: {
        // pricing details
    },
    Influencers: [{
        influencerId: String,
        amount: String,
        PaymentStatus: Boolean,
    }],
    influencersDetails: {
        name: String,
        platform: String,
        followersFrom: String,
        followersTo: String,
        engagement: String,
        location: String,
        age: Number,
        gender: String


    },
    sendProducts: Boolean,


}])







mongoose.model('campaign', Campaign);
mongoose.model('influencer', influencers);
mongoose.model('photo', User)


var data2 = [{
        "social_name": "geetasfoodielife",
        "Link to hyperlink for social_name": "https://instagram.com/geetasfoodielife?igshid=clmiyfntwn1j",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "83200",
        "like_counts": "43,941",
        "comment_counts": "105",
        "engagement_rate": "53%",
        "unique_visitors": "34",
        "total_visitors": "54"
    },
    {
        "social_name": "chefanishdeshmukh200",
        "Link to hyperlink for social_name": "https://instagram.com/chefanishdeshmukh200?igshid=156brj9dd6vzw",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "21700",
        "like_counts": "3,225",
        "comment_counts": "21",
        "engagement_rate": "15%",
        "unique_visitors": "12",
        "total_visitors": "21"
    },
    {
        "social_name": "ipsita_taluja_kashyap",
        "Link to hyperlink for social_name": "https://www.instagram.com/ipsita_taluja_kashyap/?hl=en",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "20100",
        "like_counts": "6228",
        "comment_counts": "35",
        "engagement_rate": "31%",
        "unique_visitors": "18",
        "total_visitors": "33"
    },
    {
        "social_name": "ghardirasoi",
        "Link to hyperlink for social_name": "https://instagram.com/ghardirasoi?igshid=1cl51d2zahoc6",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "28500",
        "like_counts": "11,310",
        "comment_counts": "56",
        "engagement_rate": "40%",
        "unique_visitors": "32",
        "total_visitors": "54"
    },
    {
        "social_name": "mummaslilangel",
        "Link to hyperlink for social_name": "https://www.instagram.com/mummaslilangel/",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "39300",
        "like_counts": "6,851",
        "comment_counts": "40",
        "engagement_rate": "17%",
        "unique_visitors": "45",
        "total_visitors": "67"
    },
    {
        "social_name": "socialconnoisseurs_blog",
        "Link to hyperlink for social_name": "https://www.instagram.com/socialconnoisseurs_blog/",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "89100",
        "like_counts": "12,574",
        "comment_counts": "45",
        "engagement_rate": "14%",
        "unique_visitors": "47",
        "total_visitors": "54"
    },
    {
        "social_name": "innocent_hiccups",
        "Link to hyperlink for social_name": "https://www.instagram.com/innocent_hiccups/?hl=en",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "18500",
        "like_counts": "1,316",
        "comment_counts": "23",
        "engagement_rate": "7%",
        "unique_visitors": "11",
        "total_visitors": "19"
    },
    {
        "social_name": "kraviings",
        "Link to hyperlink for social_name": "https://instagram.com/kraviings?igshid=aqrgp8mlvign",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "25467",
        "like_counts": "2,202",
        "comment_counts": "36",
        "engagement_rate": "9%",
        "unique_visitors": "33",
        "total_visitors": "42"
    },
    {
        "social_name": "spoonsofflavour",
        "Link to hyperlink for social_name": "http://Instagram.com/SpoonsOfFlavour/",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "67500",
        "like_counts": "7,603",
        "comment_counts": "22",
        "engagement_rate": "11%",
        "unique_visitors": "41",
        "total_visitors": "54"
    },
    {
        "social_name": "foodie_neighbour",
        "Link to hyperlink for social_name": "https://instagram.com/foodie_neighbour?igshid=jyuvt0q3o1rn",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "23908",
        "like_counts": "20,000",
        "comment_counts": "74",
        "engagement_rate": "84%",
        "unique_visitors": "16",
        "total_visitors": "25"
    },
    {
        "social_name": "foodie_actor_engineer",
        "Link to hyperlink for social_name": "https://www.instagram.com/foodie_actor_engineer/",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "156000",
        "like_counts": "40,082",
        "comment_counts": "34",
        "engagement_rate": "26%",
        "unique_visitors": "74",
        "total_visitors": "99"
    },
    {
        "social_name": "ruchika_asatkar",
        "Link to hyperlink for social_name": "https://instagram.com/ruchika_asatkar?igshid=bq4ou4tjxfkr",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "66700",
        "like_counts": "19,340",
        "comment_counts": "51",
        "engagement_rate": "29%",
        "unique_visitors": "35",
        "total_visitors": "41"
    },
    {
        "social_name": "shaina_shreiya",
        "Link to hyperlink for social_name": "https://www.instagram.com/shaina_shreiya/",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "20500",
        "like_counts": "7,658",
        "comment_counts": "43",
        "engagement_rate": "37%",
        "unique_visitors": "22",
        "total_visitors": "30"
    },
    {
        "social_name": "trishala.sharma",
        "Link to hyperlink for social_name": "http://instagram.com/trishala.sharma",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "40200",
        "like_counts": "3,689",
        "comment_counts": "24",
        "engagement_rate": "9%",
        "unique_visitors": "37",
        "total_visitors": "448"
    },
    {
        "social_name": "missbhukkad",
        "Link to hyperlink for social_name": "https://instagram.com/missbhukkad?igshid=q3abizgelbxb",
        "Deliverable": "IGTV",
        "post_type": "igtv_instagram",
        "followers": "52500",
        "like_counts": "1,100",
        "comment_counts": "12",
        "engagement_rate": "2%",
        "unique_visitors": "13",
        "total_visitors": "19"
    },
    {
        "social_name": "spoonofflavours",
        "Link to hyperlink for social_name": "https://www.instagram.com/spoonofflavours",
        "Deliverable": "IGTV",
        "status": "posted",
        "post_type": "igtv_instagram",
        "followers": "37700",
        "like_counts": "10,235",
        "comment_counts": "93",
        "engagement_rate": "27%",
        "unique_visitors": "36",
        "total_visitors": "51"
    }
]


var data = [{
        "post_type": "igtv_instagram",
        "social_name": "harshioyeee",
        "status": "posted",
        "engagement_rate": 7.7,
        "followers": 9726,
        "like_counts": 722,
        "unique_visitors": 14,
        "total_visitors": 7,
        "comment_counts": 27,
    }, {
        "post_type": "static_post_instagram",
        "social_name": "harshioyeee",
        "status": "posted",
        "engagement_rate": 7.7,
        "followers": 9726,
        "like_counts": 722,
        "unique_visitors": 14,
        "total_visitors": 7,
        "comment_counts": 27,
    },
    {
        "post_type": "static_post_instagram",
        "social_name": "harshioyeee",
        "status": "posted",
        "engagement_rate": 7.7,
        "followers": 9726,
        "like_counts": 722,
        "unique_visitors": 14,
        "total_visitors": 7,
        "comment_counts": 27,
    }, {
        "post_type": "static_post_instagram",
        "social_name": "harshioyeee",
        "status": "posted",
        "engagement_rate": 7.7,
        "followers": 9726,
        "like_counts": 722,
        "unique_visitors": 14,
        "total_visitors": 7,
        "comment_counts": 27,
    }
]