var aquarius = document.getElementById("aquarius");var code = document.getElementById("code");var contact = document.getElementById("contact");var lang = document.getElementById("lang");var english = document.getElementById("english");var arabic = document.getElementById("arabic");var save = document.getElementById("save");var chcode = document.getElementById("chcode");var Encrypt = document.getElementById("Encrypt");var Decode = document.getElementById("Decode");var cintext = document.getElementById("cintext");var view = document.getElementById("view");var result = document.getElementById("result");
function chlang(){
    var langva = document.getElementById("langva");
    if(langva.value == "arabic"){
        if(document.body.hasAttribute("dir","ltr")){
            document.body.setAttribute("dir","rtl");
        }
        aquarius.innerHTML = `أكواريوس`;
        code.innerHTML = `تشفير النص`;
        contact.innerHTML = `:<span class="c1">أتصل</span>`;
        lang.innerHTML = `أختر لغة:`;
        english.innerHTML = `الانكليزية`;
        arabic.innerHTML = `العربية`;
        save.innerHTML = `حفظ`;
        chcode.innerHTML = `اختر طريقة تحويل النص:`;
        Encrypt.innerHTML = `تشفير`;
        Decode.innerHTML = `فك تشفير`;
        cintext.innerHTML = `أدخل النص هنا:`;
        view.innerHTML = `عرض`;
        result.innerHTML = `عرض النتيجة:`;
    }else{
        if(document.body.hasAttribute("dir","rtl")){
            document.body.setAttribute("dir","ltr");
        }
        aquarius.innerHTML = `AQUARIUS`;
        code.innerHTML = `EncryptTEXT`;
        contact.innerHTML = `
        <span class="c1">C</span>
        <span class="c2">o</span>
        <span class="c3">n</span>
        <span class="c4">t</span>
        <span class="c5">a</span>
        <span class="c6">c</span>
        <span class="c7">t</span>:`;
        lang.innerHTML = `Choose Language:`;
        english.innerHTML = `english`;
        arabic.innerHTML = `arabic`;
        save.innerHTML = `Save`;
        chcode.innerHTML = `Choose a text conversion mode:`;
        Encrypt.innerHTML = `Encrypt`;
        Decode.innerHTML = `Decode`;
        cintext.innerHTML = `Enter Text here:`;
        view.innerHTML = `View`;
        result.innerHTML = `Result here:`;
    }
}
function decode(){
    var codeselect = document.getElementById("codeselect");
    var textarea = document.getElementById("textarea");
    var screen = document.getElementById("screen");
    if(codeselect.value=="btoa"){
        var a = btoa(textarea.value);
        screen.value = a;
    }else{
        var b = atob(textarea.value);
        screen.value = b;
    }
}