module.exports = [{
name: "yardım",
code: `
$title[Genel Komutlar]
$description[
**e!avatar** Kullanıcının avatarını gösterir

**e!kullanıcıbilgi** Kullanıcı hakkında bilgi verir

**e!ping** Kullanıcının gecikme süresini ölçer
]
$color[FFEBEE]
$footer[$username Tarafından Kullanıldı]
$addButton[1;→;primary;sayfa2;no]
$addButton[1;1/4;secondary;1/4;yes]
$addButton[1;←;primary;gostermelik;yes]`
},

{
name: "sayfa2",
 type: "interaction",
 prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{title:Ekonomi Komutları}{description:
**e!bakiye** Kullanıcının bakiyesine bakar

**e!para-ekle** Kullanıcının bakiyesine para ekler **YETKİLİLER KULLANABİLİR**

**e!para-sil** Kullanıcının bakiyesinden para siler **YETKİLİLER KULLANABİLİR**

**e!para-gönder** Kullanıcıya para gönderir

**e!altın-al** Paranızın bir kısmı ile altın alırsınız

**e!altın-sat** Altınlarınızın bir kısmını paraya çevirirsiniz

**e!altın-ekle** Kullanıcının bakiyesine altın ekler **YETKİLİLER KULLANABİLİR**

**e!altın-sil** Kullanıcının bakiyesinden altın siler **YETKİLİLER KULLANABİLİR**}{color:FFEBEE}{footer:$username Tarafından Kullanıldı}};{actionRow:{button:←:primary:sayfa1:no}{button:2/4:secondary:2/4:yes}{button:→:primary:sayfa3:no}};]`
},{
name: "sayfa1",
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{title:Genel Komutlar}{description:
**e!avatar** Kullanıcının avatarını gösterir

**e!kullanıcıbilgi** Kullanıcı hakkında bilgi verir

**e!ping** Kullanıcının gecikme süresini ölçer}{color:FFEBEE}{footer:$username Tarafından Kullanıldı}};{actionRow:{button:←:primary:gostermelik:yes}{button:1/4:secondary:1/4:yes}{button:→:primary:sayfa2:no}};]`
},{
name: "sayfa3",
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{title:Moderasyon Komutları}{description:
**e!ban** Kullanıcıyı sunucudan tasaklar **\(ID ile çalışır)\**

**e!unban** Kullanıcının yasağını kaldırır **\(ID ile çalışır)\**

**e!mute** Kullanıcıyı susturur

**e!unmute** Kullanıcının susturulmasını kaldırır}{color:FFEBEE}{footer:$username Tarafından Kullanıldı}};{actionRow:{button:←:primary:sayfa2:no}{button:3/4:secondary:3/4:yes}{button:→:primary:sayfa4:no}};]`
},{               
                  name: "sayfa4",
                  type: "interaction",
                  prototype: "button",
                  code: `
                  $interactionUpdate[;{newEmbed:{title:Abone Komutları}{description:
                  **e!abonever** Kullanıcıya Abone Rolü verir **YETKİLİLER KULLANABİLİR**

                  **e!abonerol-ayarla** Abone Rolünü Ayarlar **KURUCULAR KULLANABİLİR**

                  **e!abonerol-sıfırla** Abone Rolünü Sıfırlar **KURUCULAR KULLANABİLİR**

                  **e!abonesrol-ayarla** Abone Sorumlusu Rolünü Ayarlar **KURUCULAR KULLANABİLİR**

                  **e!abonesrol-sıfırla** Abone Sorumlusu Rolünü Sıfırlar **KURUCULAR KULLANABİLİR**}{color:FFEBEE}{footer:$username Tarafından Kullanıldı}};{actionRow:{button:←:primary:sayfa3:no}{button:4/4:secondary:4/4:yes}{button:→:primary:gostermelik:yes}};]`
                  },
]