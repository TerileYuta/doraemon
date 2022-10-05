window.onload = () => {
    //ホーム画面
    const home = Vue.component("home", {
        template: "#home-card",
        data(){
            return {
                cardList: [
                    {title: "みーちやん作戦", content: "あーやってこうやります", link: "michan"},
                    {title: "fasfasfa", content: "fasfasfsa", link: "michan"},
                ]
            }
        }
    });

    //投稿画面
    const michan = Vue.component("michan", {
        template: "#post",
        data(){
            return {
                title: "みーちゃんを使った倒し方",

                paragraphList:[
                    {
                        title: "第一段階",
                        iframe: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/EibgTvkCvZg" title="2022 iPad Pro M2 & MacBook Pro Apple Event is CANCELLED! Here’s Why…" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        content: "fasfasfasgasgasgagasgasgasgasgasgas",
                        img: "./Image/logo.jpg"
                    },
                    {
                        title: "<li>第一段階</li>",
                        content: "fasfasfasgasgasgagasgasgasgasgasgas"
                    },
                    {
                        title: "第一段階",
                        content: "fasfasfasgasgasgagasgasgasgasgasgas"
                    },
                    {
                        title: "第一段階",
                        content: "fasfasfasgasgasgagasgasgasgasgasgas"
                    },
                ]
            }
        }
    });

    const router = new VueRouter({
        routes: [
            { path: '/', component: home},
            { path: '/michan', component: michan},
        ]
    });

    new Vue({
        el: "#app",
        data: {
            msg: ''
        },

        router,

        methods: {

        },
    });
}