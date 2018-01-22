/* create by cc */
const puppeteer = require('puppeteer');

let dynamicFunc = async () => {
    // 启动浏览器
    console.log('浏览器启动中');
    const browser = await puppeteer.launch();
    // 新建页面
    console.log('新建页面');
    const page = await browser.newPage();
    // 跳转到 url
    await page.goto('http://pianke.me/');
    // 延迟 5000ms 读取数据
    await page.waitFor(5000);
    console.log("开始读取数据");
    // 片刻所有数据
    let pianKeData = [];
    /* header*/
    // logo
    let headLogo = 'https://qnstatic.pianke.me/public/assets/img/head-logo.png';
    pianKeData.push({"headLogo": headLogo});
    // navbar text
    let navbarData = await page.$$eval('.navbar li a', els => Array.from(els).map(el => el.innerText));
    pianKeData.push({"pianKeData": navbarData});
    // head 右侧编辑按钮
    let headEditer = await page.$$eval('.editer img', els => Array.from(els).map(el => el.src));
    pianKeData.push({"headEditer": headEditer});
    // head login-btn text
    let loginBtn = await page.$$eval('.login-btn div', els => Array.from(els).map(el => el.innerText));
    pianKeData.push({"loginBtn": loginBtn});
    /* container */
    /* focus-picture */
    // focus-picture img
    let focusPic = await page.$$eval('.focus-picture img', els => Array.from(els).map(el => el.src));
    // focus-picture text
    let focusText = await page.$$eval('.article-focus-title ', els => Array.from(els).map(el => el.innerText));
    // focus 所有数据整理
    let focusArr = [focusPic, focusText];
    let focusNameArr = ["focusPic", "focusText"];
    let focusData = [];
    for (var i = 0; i < focusArr[0].length; i++) {
        let json = {};
        json.focusPic = focusArr[0][i];
        json.focusText = focusArr[1][i];
        focusData.push(json)
    }
    pianKeData.push(focusData);

    /* index-content */
    /* article-list-group */
    // title-cpt img
    let titleCptImg = 'https://qnstatic.pianke.me/public/assets/img/square.png';
    pianKeData.push({"titleCptImg": titleCptImg});
    // title-cpt 阅读 | Read
    let titleCpt = await page.$$eval('.title-cpt', els => Array.from(els).map(el => el.innerText));
    pianKeData.push({"titleCpt": titleCpt});
    // 中间部分整理
    // article-img
    articleImg = await page.$$eval('.article-img', els => Array.from(els).map(el => el.style['background-image'].split("\"")[1]));
    /* article-info */
    // article-title a text
    let articleTitle = await page.$$eval('.article-title a', els => Array.from(els).map(el => el.innerText));
    // article-author a text
    let articleAuthor = await page.$$eval('.article-author a', els => Array.from(els).map(el => el.innerText));
    // article-content text
    let articleContent = await page.$$eval('.article-content', els => Array.from(els).map(el => el.innerText));
    // article-others text
    let articleOthers = await page.$$eval('.article-others', els => Array.from(els).map(el => el.innerText));

    // article 模块所有数据整理
    let articleArr = [articleImg, articleTitle, articleAuthor, articleContent, articleOthers];
    let articleNameArr = ["articleImg", "articleTitle", "articleAuthor", "articleContent", "articleOthers"];
    let articleData = [];
    for (var i = 0; i < articleArr[0].length; i++) {
        let json = {};
        json.articleImg = articleArr[0][i];
        json.articleTitle = articleArr[1][i];
        json.articleAuthor = articleArr[2][i];
        json.articleContent = articleArr[3][i];
        json.articleOthers = articleArr[4][i];
        articleData.push(json)
    }
    pianKeData.push(articleData);
    let articleViewAllImg = 'http://qnstatic.pianke.me/public/assets/img/viewall.png';
    // 中间部分数据整理
    pianKeData.push(articleViewAllImg);


    /* ting-list-group 数据*/
    // ting-img
    let tingImg = await page.$$eval('.ting-img img', els => Array.from(els).map(el => el.src));
    // ting-title
    let tingTitle = await page.$$eval('.ting-title a', els => Array.from(els).map(el => el.innerText));
    // ting-author
    let tingAuthor = await page.$$eval('.ting-author a', els => Array.from(els).map(el => el.innerText));
    // ting-others
    let tingOthers = await page.$$eval('.ting-others', els => Array.from(els).map(el => el.innerText));
    // ting 模块所有数据整理
    let tingArr = [tingImg, tingTitle, tingAuthor, tingOthers];
    let tingNameArr = ["tingImg", "tingTitle", "tingAuthor", "tingOthers"];
    let tingData = [];
    for (var i = 0; i < tingArr[0].length; i++) {
        let json = {};
        json.tingImg = tingArr[0][i];
        json.tingTitle = tingArr[1][i];
        json.tingAuthor = tingArr[2][i];
        json.tingOthers = tingArr[3][i];
        tingData.push(json)
    }
    pianKeData.push(tingData);

    /* user-list-group */
    // 音乐人 img
    let userListLogo = 'http://pianke.me/public/assets/img/user_musician.png';
    // userBg
    let userListBg = 'https://qnstatic.pianke.me/public/assets/img/user-bg.png';
    // user-cpt-left img
    let userListImg = await page.$$eval('.user-cpt-left img', els => Array.from(els).map(el => el.src));
    // user-name a text
    let userListTitle = await page.$$eval('.user-name a', els => Array.from(els).map(el => el.innerText));
    // user-des text
    let userListText = await page.$$eval('.user-des', els => Array.from(els).map(el => el.innerText));
    // user-list-group 模块所有数据整理
    let userArr = [userListImg, userListTitle, userListText];
    let userData = [];
    for (var i = 0; i < userArr[1].length; i++) {
        let json = {};
        json.userListImg = userArr[0][2 * i];
        json.userListTitle = userArr[1][i];
        json.userListText = userArr[2][i];
        userData.push(json)
    }
    pianKeData.push(userData);

    // 关闭浏览器
    console.log('浏览器关闭');
    await browser.close();
    return pianKeData;
};

module.export = pianKeData = dynamicFunc();




