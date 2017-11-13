import React, { Component } from 'react';
import './App.css';


// Data from Seattle.City Instagram Profile
var profile = {
    id: 1,
    name: "Seattle",
    followers: "128k",
    following: "2873",
    username: "seattle.city",
    profileUrl: "https://scontent-sea1-1.cdninstagram.com/t51.2885-19/915605_297004590476746_1110641249_a.jpg",
    description: "Follow us to discover all there is to know about the amazing city of Seattle! This page belongs to CityGramMedia.",
    posts: {
        size: 915,
        photos: [
            {
                id: 0,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23421762_372886279837626_5874097844410908672_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23421762_372886279837626_5874097844410908672_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23421762_372886279837626_5874097844410908672_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23421762_372886279837626_5874097844410908672_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421762_372886279837626_5874097844410908672_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421762_372886279837626_5874097844410908672_n.jpg",
                caption: "Random fact...Seattle lies in a geographical region known as the Pacific Ring of Fire, renowned for its earthquake activity. 📷 of the Seattle Washington Temple by @designflip #seattlestreets #seattlelife #seattlearchitecture #seattle #seattleskyline #seattlebound #churcharchitecture",
                likes: 840,
                comments: 17
            },
            {
                id: 1,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23507479_1995763677345927_7866148232286437376_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23507479_1995763677345927_7866148232286437376_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23507479_1995763677345927_7866148232286437376_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23507479_1995763677345927_7866148232286437376_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23507479_1995763677345927_7866148232286437376_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23507479_1995763677345927_7866148232286437376_n.jpg",
                caption: "Friday motivation...Although I understand that all days are equal with 24 hours each, most of us agree that Friday is the longest day of the week and Sunday the shortest! - D.S. Mixell 📷 by @maritzasierra91 #seattlestreets #seattlelife #seattlearchitecture #tgif #fridayfunday #fridaymotivation #seattleweekend",
                likes: 859,
                comments: 4
            },
            {
                id: 2,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23416783_554081364931853_2362447753302245376_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23416783_554081364931853_2362447753302245376_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23416783_554081364931853_2362447753302245376_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23416783_554081364931853_2362447753302245376_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23416783_554081364931853_2362447753302245376_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23416783_554081364931853_2362447753302245376_n.jpg",
                caption: "Pioneer Square. 📷 by @ilka_paola #seattlelife #pioneersquare #seattlearchitecture #seattle #citygram #seattleadventures #washingtonstate #washingtonadventure",
                likes: 553,
                comments: 8
            },
            {
                id: 3,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23421540_1971379629786584_7640593351812579328_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23421540_1971379629786584_7640593351812579328_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23421540_1971379629786584_7640593351812579328_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23421540_1971379629786584_7640593351812579328_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421540_1971379629786584_7640593351812579328_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421540_1971379629786584_7640593351812579328_n.jpg",
                caption: "There is the Ballard Farmers Market, but did you know...Pike Place Market features the longest continuously operating farmer’s market in the US. 📷 by @chelseap289 #ballardfarmersmarket #ballardseattle #seattlestreets #seattlelife #seattlearchitecture #autumninseattle #citygram #seattleadventures",
                likes: 773,
                comments: 9
            },
            {
                id: 4,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23348124_1476595959115320_8591054650751320064_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23348124_1476595959115320_8591054650751320064_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23348124_1476595959115320_8591054650751320064_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23348124_1476595959115320_8591054650751320064_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23348124_1476595959115320_8591054650751320064_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23348124_1476595959115320_8591054650751320064_n.jpg",
                caption: "Looking at Seattle from a different perspective. 📷 by @morismoreno #seattlestreets #seattlelife #seattlearchitecture #seattle #seattlestreets #perspective #wednesdaywisdom #streetview #seattlemade #seattlesbest #seattlebound",
                likes: 908,
                comments: 23
            },
            {
                id: 5,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23421808_133719247390681_6147802117181538304_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23421808_133719247390681_6147802117181538304_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23421808_133719247390681_6147802117181538304_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23421808_133719247390681_6147802117181538304_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421808_133719247390681_6147802117181538304_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421808_133719247390681_6147802117181538304_n.jpg",
                caption: "Reflections. 📷 by @manjunath_clicks #seattlelife #seattleferriswheel #reflections #seattlearchitecture #colorful #seattletrip #seattlemade #nightlife #ferriswheel #dreamcolor #dreamer",
                likes: 1101,
                comments: 21
            },
            {
                id: 6,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23421617_161057831155771_5579793830451871744_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23421617_161057831155771_5579793830451871744_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23421617_161057831155771_5579793830451871744_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23421617_161057831155771_5579793830451871744_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421617_161057831155771_5579793830451871744_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23421617_161057831155771_5579793830451871744_n.jpg",
                caption: "Seattle's first economic growth boom was built on the timber industry. 📷 by @caitlin.carver #seattleskyline #seattleviews #seattleview #seattle #seattlenature #autumnscenes #fallleaves🍁🍂 #autumncolors🍁 #seattlelife",
                likes: 686,
                comments: 5
            },
            {
                id: 7,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23164277_923041347847206_6542685722522943488_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23164277_923041347847206_6542685722522943488_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23164277_923041347847206_6542685722522943488_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23164277_923041347847206_6542685722522943488_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23164277_923041347847206_6542685722522943488_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23164277_923041347847206_6542685722522943488_n.jpg",
                caption: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon 📷 by @manjunath_clicks #seattleskyline #imagine #hope #seattle #seattleliving #citylights",
                likes: 717,
                comments: 12
            },
            {
                id: 8,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23279677_136997696875477_5330525718277259264_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23279677_136997696875477_5330525718277259264_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23279677_136997696875477_5330525718277259264_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23279677_136997696875477_5330525718277259264_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23279677_136997696875477_5330525718277259264_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23279677_136997696875477_5330525718277259264_n.jpg",
                caption: "The purest and most thoughtful minds are those which love color the most. - John Ruskin 📷 by @visitseattle #chihuly #colors🎨 #chihulygarden #seattlelife #seattlearchitecture #seattlearts #chihulyglass #lovechihuly",
                likes: 382,
                comments: 3
            },
            {
                id: 9,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23279876_134657610589576_8270155447676174336_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23279876_134657610589576_8270155447676174336_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23279876_134657610589576_8270155447676174336_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23279876_134657610589576_8270155447676174336_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23279876_134657610589576_8270155447676174336_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23279876_134657610589576_8270155447676174336_n.jpg",
                caption: "Seattle was the first city in the US to play a Beatles song on the radio. 📷 by @sarah_presh #seattleskyline #seattlearchitecture #seattleart #seattle #seattleviews #seattleadventures #weekendgetaway #seattlegram #spaceneedle",
                likes: 916,
                comments: 23
            },
            {
                id: 10,
                srcset: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s150x150/e35/23099057_1452605884809019_3524578428000927744_n.jpg 150w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s240x240/e35/23099057_1452605884809019_3524578428000927744_n.jpg 240w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s320x320/e35/23099057_1452605884809019_3524578428000927744_n.jpg 320w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/23099057_1452605884809019_3524578428000927744_n.jpg 480w,https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23099057_1452605884809019_3524578428000927744_n.jpg 640w",
                url: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23099057_1452605884809019_3524578428000927744_n.jpg",
                caption: "Autumn is a second spring when every leaf is a flower. - Albert Camus 📷 by @nan_vs_wild #mtrainier #seattlelife #autumninseattle #fallphotography #colorfulleaves #weekendadventures",
                likes: 442,
                comments: 1
            }
        ]
    }
        
}

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
