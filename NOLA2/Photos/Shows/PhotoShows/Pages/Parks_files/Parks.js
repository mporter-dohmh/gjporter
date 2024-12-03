// Created by iWeb 3.0.4 local-build-20130412

function createMediaStream_id2()
{return IWCreatePhotocast("http://home.comcast.net/%7Egjporter/Shows/PhotoShows/Pages/Parks_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://home.comcast.net/%7Egjporter/Shows/PhotoShows/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://home.comcast.net/%7Egjporter/Shows/PhotoShows/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(135,135),new IWSize(135,32),new IWSize(166,182),27,27,0,new IWSize(22,31)),new IWPhotoFrame([IWCreateImage('Parks_files/FormalShadow_01.png'),IWCreateImage('Parks_files/FormalShadow_02.png'),IWCreateImage('Parks_files/FormalShadow_03.png'),IWCreateImage('Parks_files/FormalShadow_06.png'),IWCreateImage('Parks_files/FormalShadow_12.png'),IWCreateImage('Parks_files/FormalShadow_11.png'),IWCreateImage('Parks_files/FormalShadow_10.png'),IWCreateImage('Parks_files/FormalShadow_04.png')],null,2,0.700000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Parks_files/ParksMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
