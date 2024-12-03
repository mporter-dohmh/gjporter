// Created by iWeb 3.0.4 local-build-20130411

function createMediaStream_id2()
{return IWCreatePhotocast("http://home.comcast.net/%7Egjporter/Parks/NationalParks/Pages/Tetons_%28Black_and_White%29_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://home.comcast.net/%7Egjporter/Parks/NationalParks/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://home.comcast.net/%7Egjporter/Parks/NationalParks/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(124,124),new IWSize(124,0),new IWSize(153,139),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(186, 186, 186)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,98),url:'Tetons_%28Black_and_White%29_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Tetons_%28Black_and_White%29_files/stroke_1.png'},{rect:new IWRect(1,-1,98,2),url:'Tetons_%28Black_and_White%29_files/stroke_2.png'},{rect:new IWRect(99,-1,2,2),url:'Tetons_%28Black_and_White%29_files/stroke_3.png'},{rect:new IWRect(99,1,2,98),url:'Tetons_%28Black_and_White%29_files/stroke_4.png'},{rect:new IWRect(99,99,2,2),url:'Tetons_%28Black_and_White%29_files/stroke_5.png'},{rect:new IWRect(1,99,98,2),url:'Tetons_%28Black_and_White%29_files/stroke_6.png'},{rect:new IWRect(-1,99,2,2),url:'Tetons_%28Black_and_White%29_files/stroke_7.png'}],new IWSize(100,100))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Tetons_(Black_and_White)_files/Tetons_(Black_and_White)Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
