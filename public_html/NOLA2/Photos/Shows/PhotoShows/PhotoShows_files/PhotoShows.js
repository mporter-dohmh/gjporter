// Created by iWeb 3.0.4 local-build-20140726

function createMediaStream_id2()
{return IWCreateMediaCollection("http://home.comcast.net/%7Egjporter/Shows/PhotoShows/PhotoShows_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://home.comcast.net/%7Egjporter/Shows/PhotoShows',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget13'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://home.comcast.net/%7Egjporter/Shows/PhotoShows',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(247,185),new IWSize(247,34),new IWSize(309,234),27,27,0,new IWSize(89,74)),new IWPhotoFrame([IWCreateImage('PhotoShows_files/spiralboook_ul.png'),IWCreateImage('PhotoShows_files/spiralboook_top.png'),IWCreateImage('PhotoShows_files/spiralboook_ur.png'),IWCreateImage('PhotoShows_files/spiralboook_right.png'),IWCreateImage('PhotoShows_files/spiralboook_lr.png'),IWCreateImage('PhotoShows_files/spiralboook_bottom.png'),IWCreateImage('PhotoShows_files/spiralboook_ll.png'),IWCreateImage('PhotoShows_files/spiralboook_left.png')],null,1,0.800000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget13',null,'widget14',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('PhotoShows_files/PhotoShowsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
