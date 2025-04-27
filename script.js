(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_553DE379_45A5_6D00_41A9_32B8D2EFFACF], 'gyroscopeAvailable'); this.playList_61B723B7_752C_85AC_41D9_03571B2E75CF.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_553DA379_45A5_6D00_4181_722365E3DD8C].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player451"
 },
 "children": [
  "this.MainViewer",
  "this.Container_553E2379_45A5_6D00_41CC_2E04E0A3EF94",
  "this.Container_C166B021_D31B_1265_41DC_CEEBD22A9F67",
  "this.MapViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "buttonToggleMute": [
  "this.IconButton_553DF379_45A5_6D00_41AA_00F4FD0B7986",
  "this.IconButton_C1669021_D31B_1265_41C5_2997A43A85CB"
 ],
 "definitions": [{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_20546427_311D_68D4_41AC_B55328CF31BA",
 "autoplay": true,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60968906_752C_826D_41D8_B5740AB46DB6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_64CE9E72_74FD_7EA5_41BD_4A1C7521B234",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 10.92,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_64CE9E72_74FD_7EA5_41BD_4A1C7521B234_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_64CE9E72_74FD_7EA5_41BD_4A1C7521B234_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 28.52,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 97.78
},
{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_20DB0436_311D_2934_41C6_FF09EC4C539F",
 "autoplay": true,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_t.jpg",
 "partial": false,
 "label": "1",
 "id": "panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90",
   "backwardYaw": -76.89,
   "yaw": -25.08,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_239B5BE6_33B3_D144_41C9_282F4152FE66",
  "this.overlay_620C3613_6FDE_8B82_41D8_9B1116ADC71B",
  "this.popup_796ACE44_74E4_BEEC_41B1_854A4D39E186"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_23D1347F_310C_E933_41AE_B9E3009635DA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61E80722_752C_8EA5_41C7_83E2CB2AC523",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_t.jpg",
 "partial": false,
 "label": "3",
 "id": "panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF",
   "backwardYaw": -81.62,
   "yaw": -125.01,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90",
   "backwardYaw": 37.15,
   "yaw": -67.85,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_ECFB8342_FCF3_D9E2_41B9_B03DE3DBE587",
  "this.overlay_ECFC661C_FC6D_5B67_41ED_0F219F30F553",
  "this.overlay_ECBD01B1_FC53_D8A1_41B8_4C41C6C7F091",
  "this.overlay_08278728_05F3_7E1D_4188_DD3764D22C3C",
  "this.overlay_23C3D07E_33B6_2F44_41C9_A980DBD98B89",
  "this.overlay_222C21AE_33B6_51C4_41C7_8BA202E53AE2",
  "this.overlay_226DD982_33B2_51BC_41B4_842CE547BD62",
  "this.overlay_23D8AF67_33B2_7144_41AE_F39ED6170024",
  "this.popup_64C59CF8_74FD_83A4_41DC_7CDF7E34AF1F",
  "this.popup_64B84B0A_74FF_8665_4192_E6AAD821A767",
  "this.popup_64CE9E72_74FD_7EA5_41BD_4A1C7521B234",
  "this.popup_65C76C0B_74FC_827B_4198_5AD61E53916E"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_21EF3DEF_311C_DB53_4171_280DF1FFE2BA"
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_65375238_74EB_86A5_41D5_026B2339663B.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_65375238_74EB_86A5_41D5_026B2339663B.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "longzhu"
 },
 "id": "audio_65375238_74EB_86A5_41D5_026B2339663B",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_796ACE44_74E4_BEEC_41B1_854A4D39E186",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 14.44,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_796ACE44_74E4_BEEC_41B1_854A4D39E186_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_796ACE44_74E4_BEEC_41B1_854A4D39E186_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 21.15,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": -25.23
},
{
 "thumbnailUrl": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_t.png",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "label": "Mini-map kelenteng",
 "id": "map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "image": {
  "levels": [
   {
    "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069.png",
    "width": 1587,
    "height": 2245,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_lq.png",
    "width": 215,
    "tags": "preload",
    "height": 305,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "width": 1587,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "initialZoomFactor": 1,
 "overlays": [
  "this.overlay_C7730354_D328_FBF6_41E2_7ECEB4EA6241",
  "this.overlay_C7C68165_D337_77D7_41D0_8E100AF0D7F4",
  "this.overlay_C6FFCB4B_D339_0BD2_41E3_878F875CF7CB",
  "this.overlay_C6C95C6D_D33B_0DD7_41C2_BD77EEE21218",
  "this.overlay_C666CA94_D339_1575_41CD_C208186AF3C3",
  "this.overlay_C6A299D3_D33F_16F2_41CF_BFEC0FBC50EC",
  "this.overlay_C60F6B4E_D339_0BD2_41E3_381963CF82C5",
  "this.overlay_C511E4B1_D329_3D4E_41E6_D95D7E7DE4AD"
 ],
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 2245
},
{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_21B5B19E_311D_EBF5_41C4_9B1CDE65C612",
 "autoplay": true,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 124,
  "yaw": 103.11,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_605D083B_752C_829B_41C4_24A8CA8E47D0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_t.jpg",
 "partial": false,
 "label": "6",
 "id": "panorama_C0530613_D3FB_1D73_41C5_86E62B747157",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8",
   "backwardYaw": -16.26,
   "yaw": -9.83,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4F195B3A_4314_7F85_41AD_345B8304A185",
   "backwardYaw": 169.71,
   "yaw": -163.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_09822F37_0633_AE74_4176_2D8D9611A530",
  "this.overlay_092427F4_0630_9DF4_4193_6D095B857F5C",
  "this.overlay_2223F8D0_33AE_7F5C_41C2_6958FE998429",
  "this.overlay_21B6CB00_3352_D2BC_41C2_7FE8C35AFB89",
  "this.popup_22C4C135_3352_2EC4_41C7_39145E93BA2E",
  "this.overlay_2212E493_335E_77DC_41A3_9C4721489225",
  "this.overlay_212270F8_335E_2F4C_41C8_859DF0E80242",
  "this.popup_223BD06B_335D_EF4C_41C0_CFB02218A168",
  "this.popup_6662E724_74DD_8EAD_41D2_8EE4DF0E75EA",
  "this.popup_6797328B_74DF_8664_41CC_1ECBF44AC371"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_21AEA28C_311D_29D5_41C0_9A62F90D9360"
 ]
},
{
 "audio": {
  "mp3Url": "media/audio_668AA931_74EC_82A7_41D1_527B614EC359.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_668AA931_74EC_82A7_41D1_527B614EC359.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "xianglu"
 },
 "id": "audio_668AA931_74EC_82A7_41D1_527B614EC359",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_602DD7FC_752C_8D9D_41DC_68F9C1BE3C8C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'sync_with_field_of_view')",
   "media": "this.map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_61B723B7_752C_85AC_41D9_03571B2E75CF",
 "class": "PlayList"
},
{
 "items": [
  {
   "start": "this.viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_64E5B65B_74ED_8E9B_41AA_2DDBDA072921, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_64E5B65B_74ED_8E9B_41AA_2DDBDA072921, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230VideoPlayer)",
   "media": "this.video_3E903ABE_3104_D934_41C7_75D26EF576C9",
   "player": "this.viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230VideoPlayer"
  }
 ],
 "id": "PlayList_64E5B65B_74ED_8E9B_41AA_2DDBDA072921",
 "class": "PlayList"
},
{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_204A04E7_311F_2953_4174_C364C194F0BD",
 "autoplay": true,
 "pitch": 0
},
{
 "thumbnailUrl": "media/video_3E903ABE_3104_D934_41C7_75D26EF576C9_t.jpg",
 "class": "Video",
 "label": "Cap Go Meh",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_3E903ABE_3104_D934_41C7_75D26EF576C9",
 "height": 720,
 "video": {
  "mp4Url": "media/video_3E903ABE_3104_D934_41C7_75D26EF576C9.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_23FB3612_33B3_D2DC_41BE_A559D19204BC",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 8.67,
 "hideEasing": "cubic_out",
 "pitch": 8.8,
 "hideDuration": 500,
 "loop": false,
 "yaw": -81.38,
 "video": {
  "mp4Url": "media/video_3E903ABE_3104_D934_41C7_75D26EF576C9.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_64CE4503_74FC_826B_41B0_B1CB2C9B259A.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_64CE4503_74FC_826B_41B0_B1CB2C9B259A.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "longdiao-wuji"
 },
 "id": "audio_64CE4503_74FC_826B_41B0_B1CB2C9B259A",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_6581DD0A_74E5_8265_41DD_0EA0B8B2BAB7",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 10.14,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_6581DD0A_74E5_8265_41DD_0EA0B8B2BAB7_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_6581DD0A_74E5_8265_41DD_0EA0B8B2BAB7_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.58,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": -123.8
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 167.84,
  "class": "PanoramaCameraPosition",
  "pitch": -4.42
 },
 "id": "panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_21EF3DEF_311C_DB53_4171_280DF1FFE2BA",
 "autoplay": true,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 124,
  "yaw": -142.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_61E5C6F3_752C_8FAB_41C8_CE8CB8E0C3A3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_669A6A90_74E4_8665_41BE_7A8346EE9971",
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "paddingRight": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "class": "Window",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window13424"
 }
},
{
 "thumbnailUrl": "media/video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD_t.jpg",
 "class": "Video",
 "label": "Wayang Potehi",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD",
 "height": 720,
 "video": {
  "mp4Url": "media/video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_7EAB906A_74DC_82A5_41D1_F947043DCBB1",
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "paddingRight": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "class": "Window",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window414"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_65666F77_74E5_9EAC_41BF_9143F2DDBC65.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_65666F77_74E5_9EAC_41BF_9143F2DDBC65.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "shishi"
 },
 "id": "audio_65666F77_74E5_9EAC_41BF_9143F2DDBC65",
 "autoplay": true
},
{
 "audio": {
  "mp3Url": "media/audio_67B4A48D_74DC_827F_41BE_013B67315BB3.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_67B4A48D_74DC_827F_41BE_013B67315BB3.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "zanjianding"
 },
 "id": "audio_67B4A48D_74DC_827F_41BE_013B67315BB3",
 "autoplay": true
},
{
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F",
 "buttonZoomOut": "this.IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 163.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_603F97CD_752C_8DFF_41CF_43C1BD6BE57E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "easing": "quad_in",
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "from": "left",
 "duration": 400,
 "class": "SlideInEffect"
},
{
 "items": [
  {
   "start": "this.viewer_uid61A17405_752C_826F_41D6_C64EECD15305VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_64E2566B_74ED_8EA4_41A4_887A7D7173F5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_64E2566B_74ED_8EA4_41A4_887A7D7173F5, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid61A17405_752C_826F_41D6_C64EECD15305VideoPlayer)",
   "media": "this.video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD",
   "player": "this.viewer_uid61A17405_752C_826F_41D6_C64EECD15305VideoPlayer"
  }
 ],
 "id": "PlayList_64E2566B_74ED_8EA4_41A4_887A7D7173F5",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60863944_752C_82ED_41D8_223EA8F53A3A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_658EFEB2_74EB_9FA4_41D1_964F9CB6F22E",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 17.25,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_658EFEB2_74EB_9FA4_41D1_964F9CB6F22E_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_658EFEB2_74EB_9FA4_41D1_964F9CB6F22E_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -26.8,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 162.15
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_7EA5706A_74DC_82A5_41D7_DF542B3FB206",
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "paddingRight": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid61A17405_752C_826F_41D6_C64EECD15305"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "class": "Window",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window415"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_7AC84C2C_74EF_82BC_41CB_E635F24FCB72.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_7AC84C2C_74EF_82BC_41CB_E635F24FCB72.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "miaomen"
 },
 "id": "audio_7AC84C2C_74EF_82BC_41CB_E635F24FCB72",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6043286A_752C_82A5_4170_9EAD042B3E23",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED",
   "camera": "this.panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90",
   "camera": "this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9",
   "camera": "this.panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8",
   "camera": "this.panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF",
   "camera": "this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157",
   "camera": "this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_4F195B3A_4314_7F85_41AD_345B8304A185",
   "camera": "this.panorama_4F195B3A_4314_7F85_41AD_345B8304A185_camera"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 8)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.video_3E903ABE_3104_D934_41C7_75D26EF576C9",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.video_21A251FE_317B_2B34_41BB_B60AE8E29B4C",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.video_2121273A_317B_373D_41AB_A0E2651917A3",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.video_21F55927_33B6_7EC4_41AC_122F9BE1B0A6",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "media": "this.video_666918C3_74E4_83EB_41B1_C60C5EE93D2F",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_66B38902_74EC_8265_41D7_4281ADF5B2A2",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 26.25,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_66B38902_74EC_8265_41D7_4281ADF5B2A2_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_66B38902_74EC_8265_41D7_4281ADF5B2A2_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.5,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 3.59
},
{
 "audio": {
  "mp3Url": "media/audio_7B53CB0F_74FC_867B_41C3_BC903CDD6152.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_7B53CB0F_74FC_867B_41C3_BC903CDD6152.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "huolu_1"
 },
 "id": "audio_7B53CB0F_74FC_867B_41C3_BC903CDD6152",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60185760_752C_8EA5_41D3_A23C1B6FAF1B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 124,
  "yaw": -17.46,
  "pitch": -2.81,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.6,
  "class": "PanoramaCameraPosition",
  "pitch": -12.32
 },
 "id": "panorama_C0530613_D3FB_1D73_41C5_86E62B747157_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_6662E724_74DD_8EAD_41D2_8EE4DF0E75EA",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 20.04,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_6662E724_74DD_8EAD_41D2_8EE4DF0E75EA_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_6662E724_74DD_8EAD_41D2_8EE4DF0E75EA_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -38.71,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 18.2
},
{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_23D1347F_310C_E933_41AE_B9E3009635DA",
 "autoplay": true,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_t.jpg",
 "partial": false,
 "label": "7",
 "id": "panorama_4F195B3A_4314_7F85_41AD_345B8304A185",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157",
   "backwardYaw": -163.15,
   "yaw": 169.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF",
   "backwardYaw": 61.59,
   "yaw": 79.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_09AB8D22_0617_920C_4127_2182ECA5C330",
  "this.overlay_16941CE7_0613_B214_4177_8A57495DF640"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_20DB0436_311D_2934_41C6_FF09EC4C539F"
 ]
},
{
 "to": "left",
 "easing": "quad_in",
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "duration": 400,
 "class": "SlideOutEffect"
},
{
 "audio": {
  "mp3Url": "media/audio_66631EA0_74EF_7FA5_41D7_76E7A4A8BFCA.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_66631EA0_74EF_7FA5_41D7_76E7A4A8BFCA.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "mazu-shenjiao"
 },
 "id": "audio_66631EA0_74EF_7FA5_41D7_76E7A4A8BFCA",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60B4F973_752C_82AB_41B1_548B58AD8D9A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  {
   "start": "this.viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_64E5065B_74ED_8E9B_41D2_837D297982CD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_64E5065B_74ED_8E9B_41D2_837D297982CD, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46AVideoPlayer)",
   "media": "this.video_2121273A_317B_373D_41AB_A0E2651917A3",
   "player": "this.viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46AVideoPlayer"
  }
 ],
 "id": "PlayList_64E5065B_74ED_8E9B_41D2_837D297982CD",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0.44
 },
 "id": "panorama_4829BF93_4314_168B_41AA_ED394498D4DF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  {
   "start": "this.viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_62C01148_752C_82E4_4197_F4C913BB0DF9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_62C01148_752C_82E4_4197_F4C913BB0DF9, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4VideoPlayer)",
   "media": "this.video_666918C3_74E4_83EB_41B1_C60C5EE93D2F",
   "player": "this.viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4VideoPlayer"
  }
 ],
 "id": "PlayList_62C01148_752C_82E4_4197_F4C913BB0DF9",
 "class": "PlayList"
},
{
 "items": [
  {
   "start": "this.viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_64E2F65B_74ED_8E9B_41B1_9AB9B29AF62F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_64E2F65B_74ED_8E9B_41B1_9AB9B29AF62F, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3VideoPlayer)",
   "media": "this.video_21A251FE_317B_2B34_41BB_B60AE8E29B4C",
   "player": "this.viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3VideoPlayer"
  }
 ],
 "id": "PlayList_64E2F65B_74ED_8E9B_41B1_9AB9B29AF62F",
 "class": "PlayList"
},
{
 "maximumAngle": 360,
 "loop": true,
 "yaw": 0,
 "audio": "this.audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "class": "DirectionalPanoramaAudio",
 "data": {
  "label": "Backsound-VR"
 },
 "id": "audio_21AEA28C_311D_29D5_41C0_9A62F90D9360",
 "autoplay": true,
 "pitch": 0
},
{
 "thumbnailUrl": "media/video_21F55927_33B6_7EC4_41AC_122F9BE1B0A6_t.jpg",
 "class": "Video",
 "label": "Chiu It",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_21F55927_33B6_7EC4_41AC_122F9BE1B0A6",
 "height": 720,
 "video": {
  "mp4Url": "media/video_21F55927_33B6_7EC4_41AC_122F9BE1B0A6.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "to": "left",
 "easing": "quad_in",
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "duration": 400,
 "class": "SlideOutEffect"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_64BD677D_74FB_8E9F_41D6_9BC551269C14",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 20.09,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_64BD677D_74FB_8E9F_41D6_9BC551269C14_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_64BD677D_74FB_8E9F_41D6_9BC551269C14_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.86,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": -19.69
},
{
 "easing": "quad_in",
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "from": "left",
 "duration": 400,
 "class": "SlideInEffect"
},
{
 "thumbnailUrl": "media/video_21A251FE_317B_2B34_41BB_B60AE8E29B4C_t.jpg",
 "class": "Video",
 "label": "Ulambana",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_21A251FE_317B_2B34_41BB_B60AE8E29B4C",
 "height": 720,
 "video": {
  "mp4Url": "media/video_21A251FE_317B_2B34_41BB_B60AE8E29B4C.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_64B84B0A_74FF_8665_4192_E6AAD821A767",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 10.18,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_64B84B0A_74FF_8665_4192_E6AAD821A767_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_64B84B0A_74FF_8665_4192_E6AAD821A767_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 15.93,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 9.57
},
{
 "thumbnailUrl": "media/video_666918C3_74E4_83EB_41B1_C60C5EE93D2F_t.jpg",
 "class": "Video",
 "label": "chiu it new",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_666918C3_74E4_83EB_41B1_C60C5EE93D2F",
 "height": 720,
 "video": {
  "mp4Url": "media/video_666918C3_74E4_83EB_41B1_C60C5EE93D2F.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_7EAA4065_74DC_82AF_41D6_3997774B3E58",
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "paddingRight": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46A"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "class": "Window",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window412"
 }
},
{
 "audio": {
  "mp3Url": "media/audio_65E7C5A5_74FB_8DAF_41CE_A2AC8DB75B15.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_65E7C5A5_74FB_8DAF_41CE_A2AC8DB75B15.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "denglong"
 },
 "id": "audio_65E7C5A5_74FB_8DAF_41CE_A2AC8DB75B15",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_6615CA4A_74E4_86E5_41D0_DFC451A07207",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 12.72,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_6615CA4A_74E4_86E5_41D0_DFC451A07207_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_6615CA4A_74E4_86E5_41D0_DFC451A07207_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.95,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 109.51
},
{
 "audio": {
  "mp3Url": "media/audio_7B1AAF53_74FC_BEEB_41D4_18824B9E120E.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_7B1AAF53_74FC_BEEB_41D4_18824B9E120E.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "fudiao"
 },
 "id": "audio_7B1AAF53_74FC_BEEB_41D4_18824B9E120E",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_65C76C0B_74FC_827B_4198_5AD61E53916E",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 9.03,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_65C76C0B_74FC_827B_4198_5AD61E53916E_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_65C76C0B_74FC_827B_4198_5AD61E53916E_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.64,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 46.44
},
{
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetHfov": 88,
   "targetPitch": 6.45,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "duration": 3000
  }
 ],
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -24.05,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialPosition": {
  "hfov": 88,
  "yaw": -24.05,
  "pitch": 6.45,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_223BD06B_335D_EF4C_41C0_CFB02218A168",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 23.54,
 "hideEasing": "cubic_out",
 "pitch": -21.02,
 "hideDuration": 500,
 "loop": false,
 "yaw": -56.71,
 "video": {
  "mp4Url": "media/video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "thumbnailUrl": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_t.jpg",
 "partial": false,
 "label": "5",
 "id": "panorama_4829BF93_4314_168B_41AA_ED394498D4DF",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9",
   "backwardYaw": -125.01,
   "yaw": -81.62,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90",
   "backwardYaw": 138.48,
   "yaw": -112.6,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4F195B3A_4314_7F85_41AD_345B8304A185",
   "backwardYaw": 79.22,
   "yaw": 61.59,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_09EA9837_0630_9274_4182_199901EF9C14",
  "this.overlay_09BEE0D1_0633_F20C_4181_7087EE85CE6A",
  "this.overlay_08912AD6_0630_9634_4196_E9CB8D1CC0AB",
  "this.overlay_21B0BDFA_33B2_D14F_41B8_F67918C650F5",
  "this.overlay_21A69806_33B2_DEC4_41BD_921086C5BE02",
  "this.popup_22FAC19B_33B2_31CD_41C3_AB8A2DB77906",
  "this.overlay_22072FCE_33AE_7147_4186_C08AB5837BC1",
  "this.popup_66B38902_74EC_8265_41D7_4281ADF5B2A2",
  "this.popup_60C971F5_74E4_85AC_41D3_77FFF90A03EC"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_21B5B19E_311D_EBF5_41C4_9B1CDE65C612"
 ]
},
{
 "thumbnailUrl": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_t.jpg",
 "partial": false,
 "label": "4",
 "id": "panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157",
   "backwardYaw": -9.83,
   "yaw": -16.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_1635E185_0610_B214_4193_932AD24D9872",
  "this.overlay_1436B4B2_0611_920C_418E_20C04EE16C9B",
  "this.overlay_16038FEE_0617_EE15_4180_35906E5A3869",
  "this.overlay_23CFAD40_33B2_D6BC_41AD_FA61D9D62EA7",
  "this.overlay_230D2BBC_33BE_D1CB_419A_68C94E46BFD4",
  "this.overlay_23DD9E6F_33BE_3344_41AB_DEE4986D74F4",
  "this.overlay_2342AF08_33BE_52CB_41C1_80121B217D65",
  "this.popup_23FB3612_33B3_D2DC_41BE_A559D19204BC",
  "this.overlay_22F084E8_33B2_574C_41C6_700B07941650",
  "this.popup_6581DD0A_74E5_8265_41DD_0EA0B8B2BAB7",
  "this.popup_6615CA4A_74E4_86E5_41D0_DFC451A07207",
  "this.popup_656F3A6F_74E4_86BC_41CA_F0D3D946CA83",
  "this.popup_658EFEB2_74EB_9FA4_41D1_964F9CB6F22E"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_20546427_311D_68D4_41AC_B55328CF31BA"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_656F3A6F_74E4_86BC_41CA_F0D3D946CA83",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 14.09,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_656F3A6F_74E4_86BC_41CA_F0D3D946CA83_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_656F3A6F_74E4_86BC_41CA_F0D3D946CA83_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.78,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 128.2
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 98.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61F286B4_752C_8FAD_41CC_01FF06B7032A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_22C4C135_3352_2EC4_41C7_39145E93BA2E",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 8.16,
 "hideEasing": "cubic_out",
 "pitch": -7.91,
 "hideDuration": 500,
 "loop": false,
 "yaw": 62.16,
 "video": {
  "mp4Url": "media/video_21A251FE_317B_2B34_41BB_B60AE8E29B4C.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.9,
  "class": "PanoramaCameraPosition",
  "pitch": -5.45
 },
 "id": "panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "thumbnailUrl": "media/video_2121273A_317B_373D_41AB_A0E2651917A3_t.jpg",
 "class": "Video",
 "label": "Imlek",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_2121273A_317B_373D_41AB_A0E2651917A3",
 "height": 720,
 "video": {
  "mp4Url": "media/video_2121273A_317B_373D_41AB_A0E2651917A3.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_7EA90060_74DC_82A5_41D4_11E3BB7788F6",
 "closeButtonBorderRadius": 0,
 "closeButtonPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#888888",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "bodyPaddingLeft": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "gap": 10,
 "bodyPaddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0,
 "paddingRight": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingTop": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 5,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#666666",
 "class": "Window",
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBorderSize": 0,
 "closeButtonRollOverIconLineWidth": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadow": true,
 "bodyPaddingRight": 0,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window411"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 124,
  "yaw": -41.52,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_6060F8D7_752C_83EB_41D4_CFF4FAAA34FE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "buttonToggleHotspots": "this.IconButton_553DC379_45A5_6D00_41C4_B94D2A946AC4",
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.MainViewer",
 "buttonZoomOut": "this.IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15",
 "class": "PanoramaPlayer",
 "buttonPlayRight": "this.IconButton_C1676021_D31B_1265_41E4_6AF77CA1B97D",
 "buttonMoveDown": "this.IconButton_C1675021_D31B_1265_41D9_5255626CF6F6",
 "id": "MainViewerPanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_C167F021_D31B_1265_41E6_0BD63FAF7D0C",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveRight": "this.IconButton_C1674021_D31B_1265_41B5_3A0FC8917CB9",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_C1673021_D31B_1265_41D0_DB01709377F8",
 "buttonMoveLeft": "this.IconButton_C167E021_D31B_1265_41DE_55BD884FC156",
 "buttonToggleGyroscope": "this.IconButton_553DE379_45A5_6D00_41A9_32B8D2EFFACF",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_553F3379_45A5_6D00_41D1_2AD363CF8348",
 "buttonZoomIn": "this.IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.78,
  "class": "PanoramaCameraPosition",
  "pitch": 11.06
 },
 "id": "panorama_4F195B3A_4314_7F85_41AD_345B8304A185_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_64C59CF8_74FD_83A4_41DC_7CDF7E34AF1F",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 9.05,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_64C59CF8_74FD_83A4_41DC_7CDF7E34AF1F_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_64C59CF8_74FD_83A4_41DC_7CDF7E34AF1F_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.16,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": 177.19
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_60C971F5_74E4_85AC_41D3_77FFF90A03EC",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 9.91,
 "hideEasing": "cubic_out",
 "pitch": 1.07,
 "hideDuration": 500,
 "loop": false,
 "yaw": 92.82,
 "video": {
  "mp4Url": "media/video_666918C3_74E4_83EB_41B1_C60C5EE93D2F.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "rotationY": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "id": "popup_22FAC19B_33B2_31CD_41C3_AB8A2DB77906",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 21.22,
 "hideEasing": "cubic_out",
 "pitch": 0.22,
 "hideDuration": 500,
 "loop": false,
 "yaw": 138.84,
 "video": {
  "mp4Url": "media/video_2121273A_317B_373D_41AB_A0E2651917A3.mp4",
  "width": 1280,
  "height": 720,
  "class": "VideoResource"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_6797328B_74DF_8664_41CC_1ECBF44AC371",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hfov": 19.38,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_6797328B_74DF_8664_41CC_1ECBF44AC371_0_0.png",
    "width": 1024,
    "height": 768,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_6797328B_74DF_8664_41CC_1ECBF44AC371_0_1.png",
    "width": 512,
    "height": 384,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 12.19,
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": -57.44
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 88,
  "yaw": 154.92,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_600E678F_752C_8E7B_4180_BAA18EFA6291",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_t.jpg",
 "partial": false,
 "label": "2",
 "id": "panorama_483D1F5F_4314_37BB_41C7_F141A184FC90",
 "hfovMin": "100%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9",
   "backwardYaw": -67.85,
   "yaw": 37.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF",
   "backwardYaw": -112.6,
   "yaw": 138.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED",
   "backwardYaw": -25.08,
   "yaw": -76.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_5B6ACB29_4A9A_C51D_41CA_3A2D29636D60",
  "this.overlay_F249AE97_FCD5_6B61_41ED_DB818E375441",
  "this.overlay_08F5E168_0610_B21C_415E_2BA80E9FF570",
  "this.overlay_2376171B_33B6_52CC_4174_07CA3784197A",
  "this.popup_64BD677D_74FB_8E9F_41D6_9BC551269C14"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_204A04E7_311F_2953_4174_C364C194F0BD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 54.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_607378A8_752C_83A5_41CD_4A5668EB2AEE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "12vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_553DB379_45A5_6D00_41BF_2C8E5E923B8A",
  "this.Container_553DC379_45A5_6D00_41CD_A60790C8484A"
 ],
 "id": "Container_553E2379_45A5_6D00_41CC_2E04E0A3EF94",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "100%",
 "data": {
  "name": "--- LEFT PANEL 2"
 }
},
{
 "children": [
  "this.IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15",
  "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3",
  "this.IconButton_C167F021_D31B_1265_41E6_0BD63FAF7D0C",
  "this.IconButton_C167E021_D31B_1265_41DE_55BD884FC156",
  "this.Container_C1670021_D31B_1265_41CA_30DAD0C61508",
  "this.IconButton_C1674021_D31B_1265_41B5_3A0FC8917CB9",
  "this.IconButton_C1676021_D31B_1265_41E4_6AF77CA1B97D",
  "this.IconButton_C1669021_D31B_1265_41C5_2997A43A85CB",
  "this.IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F"
 ],
 "id": "Container_C166B021_D31B_1265_41DC_CEEBD22A9F67",
 "left": 448,
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "26.81%",
 "overflow": "hidden",
 "class": "Container",
 "paddingBottom": 0,
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "0.5%",
 "height": 139,
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 4,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container46340"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "right": "0%",
 "width": "72.826%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "12vmin",
 "height": "99.834%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.MapViewer, false, 0, null, null, false)",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "visible": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "MapViewer"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "UIComponent",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "visible": false,
 "data": {
  "name": "UIComponent17222"
 },
 "paddingTop": 0
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage17223"
 },
 "paddingTop": 0,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton17224"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "shadowColor": "#000000",
 "iconLineWidth": 5,
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 5,
 "iconColor": "#000000",
 "iconHeight": 20,
 "class": "CloseButton",
 "iconWidth": 20,
 "minHeight": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "iconBeforeLabel": true,
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "paddingLeft": 5,
 "shadow": false,
 "paddingRight": 5,
 "fontColor": "#FFFFFF",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "visible": false,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "paddingTop": 5,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_553DF379_45A5_6D00_41AA_00F4FD0B7986",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_553DF379_45A5_6D00_41AA_00F4FD0B7986.png",
 "borderRadius": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_553DF379_45A5_6D00_41AA_00F4FD0B7986_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Sound"
 }
},
{
 "id": "IconButton_C1669021_D31B_1265_41C5_2997A43A85CB",
 "backgroundOpacity": 0,
 "width": 40,
 "iconURL": "skin/IconButton_C1669021_D31B_1265_41C5_2997A43A85CB.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1669021_D31B_1265_41C5_2997A43A85CB_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_C1669021_D31B_1265_41C5_2997A43A85CB_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46351"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_553DA379_45A5_6D00_4181_722365E3DD8C",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_553DA379_45A5_6D00_4181_722365E3DD8C.png",
 "borderRadius": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_553DA379_45A5_6D00_4181_722365E3DD8C_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Fullscreen"
 }
},
{
 "mp3Url": "media/audio_23D1347F_310C_E933_41AE_B9E3009635DA.mp3",
 "class": "AudioResource",
 "id": "audioresource_204A14E7_311F_2953_41BD_B51556FD822B",
 "oggUrl": "media/audio_23D1347F_310C_E933_41AE_B9E3009635DA.ogg"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_796ACE44_74E4_BEEC_41B1_854A4D39E186, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_7AC84C2C_74EF_82BC_41CB_E635F24FCB72, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -25.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0_HS_4_0.png",
      "width": 261,
      "height": 194,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.15
  }
 ],
 "id": "overlay_239B5BE6_33B3_D144_41C9_282F4152FE66",
 "data": {
  "label": "Gerbang"
 },
 "maps": [
  {
   "hfov": 14.44,
   "yaw": -25.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0_HS_4_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90, this.camera_605D083B_752C_829B_41C4_24A8CA8E47D0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -25.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.62,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0_HS_5_0.png",
      "width": 145,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.94
  }
 ],
 "id": "overlay_620C3613_6FDE_8B82_41D8_9B1116ADC71B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 8.62,
   "yaw": -25.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1547B555_0671_9234_4153_6726852BBA00",
   "pitch": -35.8,
   "yaw": 1.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.07,
   "distance": 100
  }
 ],
 "id": "overlay_ECFB8342_FCF3_D9E2_41B9_B03DE3DBE587",
 "data": {
  "label": "Arrow 03b"
 },
 "maps": [
  {
   "hfov": 11.07,
   "yaw": 1.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90, this.camera_61E5C6F3_752C_8FAB_41C8_CE8CB8E0C3A3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5837F1_FC55_38BE_41E9_F6C671A86C00",
   "pitch": -20.86,
   "yaw": -67.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.58,
   "distance": 100
  }
 ],
 "id": "overlay_ECFC661C_FC6D_5B67_41ED_0F219F30F553",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 11.58,
   "yaw": -67.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_3_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_16CC3BA5_0613_9614_4198_117EEF570571",
   "pitch": -25.95,
   "yaw": 175.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.51,
   "distance": 100
  }
 ],
 "id": "overlay_ECBD01B1_FC53_D8A1_41B8_4C41C6C7F091",
 "data": {
  "label": "Arrow 03b"
 },
 "maps": [
  {
   "hfov": 12.51,
   "yaw": 175.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_4_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF, this.camera_61F286B4_752C_8FAD_41CC_01FF06B7032A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_16CFFBA5_0613_9614_418E_DA9FCF6F151C",
   "pitch": -13.38,
   "yaw": -125.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.83,
   "distance": 100
  }
 ],
 "id": "overlay_08278728_05F3_7E1D_4188_DD3764D22C3C",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -125.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_5_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_64C59CF8_74FD_83A4_41DC_7CDF7E34AF1F, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_7B1AAF53_74FC_BEEB_41D4_18824B9E120E, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 177.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_15_0.png",
      "width": 153,
      "height": 155,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16
  }
 ],
 "id": "overlay_23C3D07E_33B6_2F44_41C9_A980DBD98B89",
 "data": {
  "label": "Relief"
 },
 "maps": [
  {
   "hfov": 9.05,
   "yaw": 177.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_64B84B0A_74FF_8665_4192_E6AAD821A767, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_64CE4503_74FC_826B_41B0_B1CB2C9B259A, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 9.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.18,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_16_0.png",
      "width": 178,
      "height": 164,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.93
  }
 ],
 "id": "overlay_222C21AE_33B6_51C4_41C7_8BA202E53AE2",
 "data": {
  "label": "Atap Naga"
 },
 "maps": [
  {
   "hfov": 10.18,
   "yaw": 9.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_16_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_64CE9E72_74FD_7EA5_41BD_4A1C7521B234, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_64CE4503_74FC_826B_41B0_B1CB2C9B259A, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 97.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_17_0.png",
      "width": 209,
      "height": 147,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 28.52
  }
 ],
 "id": "overlay_226DD982_33B2_51BC_41B4_842CE547BD62",
 "data": {
  "label": "Atap Naga"
 },
 "maps": [
  {
   "hfov": 10.92,
   "yaw": 97.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_17_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 28.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_65C76C0B_74FC_827B_4198_5AD61E53916E, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_65E7C5A5_74FB_8DAF_41CE_A2AC8DB75B15, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 46.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.03,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_18_0.png",
      "width": 153,
      "height": 142,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.64
  }
 ],
 "id": "overlay_23D8AF67_33B2_7144_41AE_F39ED6170024",
 "data": {
  "label": "Lampion"
 },
 "maps": [
  {
   "hfov": 9.03,
   "yaw": 46.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_18_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "map": {
  "width": 204.27,
  "x": 1157.07,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_0_map.gif",
     "width": 16,
     "height": 19,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 1623.35,
  "offsetY": 0,
  "height": 243.11,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1156.29,
  "class": "HotspotMapOverlayImage",
  "y": 1622.58,
  "width": 204.27,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_0.png",
     "width": 204,
     "height": 243,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 243.11
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C7730354_D328_FBF6_41E2_7ECEB4EA6241",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 130.84,
  "x": 1052.2,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_1_map.gif",
     "width": 16,
     "height": 21,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 924.02,
  "offsetY": 0,
  "height": 177.45,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1051.42,
  "class": "HotspotMapOverlayImage",
  "y": 923.25,
  "width": 130.84,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_1.png",
     "width": 130,
     "height": 177,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 177.45
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C7C68165_D337_77D7_41D0_8E100AF0D7F4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 123.07,
  "x": 698.94,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_2_map.gif",
     "width": 16,
     "height": 17,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 625.14,
  "offsetY": 0,
  "height": 138.61,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 698.36,
  "class": "HotspotMapOverlayImage",
  "y": 624.56,
  "width": 123.07,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_2.png",
     "width": 123,
     "height": 138,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 138.61
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C6FFCB4B_D339_0BD2_41E3_878F875CF7CB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 161.91,
  "x": 275.58,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_3_map.gif",
     "width": 15,
     "height": 18,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 982.28,
  "offsetY": 0,
  "height": 189.1,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 274.8,
  "class": "HotspotMapOverlayImage",
  "y": 981.51,
  "width": 161.91,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_3.png",
     "width": 161,
     "height": 189,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.1
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C6C95C6D_D33B_0DD7_41C2_BD77EEE21218",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 134.72,
  "x": 555.23,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_4_map.gif",
     "width": 16,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 388.21,
  "offsetY": 0,
  "height": 142.49,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 554.26,
  "class": "HotspotMapOverlayImage",
  "y": 387.44,
  "width": 134.72,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_4.png",
     "width": 134,
     "height": 142,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 142.49
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C666CA94_D339_1575_41CD_C208186AF3C3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 93.45,
  "x": 955.68,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_5_map.gif",
     "width": 16,
     "height": 21,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 353.06,
  "offsetY": 0,
  "height": 125.38,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 954.71,
  "class": "HotspotMapOverlayImage",
  "y": 352.29,
  "width": 93.45,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_5.png",
     "width": 93,
     "height": 125,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 125.38
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C6A299D3_D33F_16F2_41CF_BFEC0FBC50EC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 72.32,
  "x": 735.45,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_6_map.gif",
     "width": 16,
     "height": 17,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 134,
  "offsetY": 0,
  "height": 78.71,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 734.67,
  "class": "HotspotMapOverlayImage",
  "y": 133.22,
  "width": 72.32,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_6.png",
     "width": 72,
     "height": 78,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 78.71
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C60F6B4E_D339_0BD2_41E3_381963CF82C5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 97.86,
  "x": 1393.22,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_7_map.gif",
     "width": 16,
     "height": 19,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 394.04,
  "offsetY": 0,
  "height": 120.2,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1392.44,
  "class": "HotspotMapOverlayImage",
  "y": 393.26,
  "width": 97.86,
  "image": {
   "levels": [
    {
     "url": "media/map_C10B4CAF_D3F9_0D53_41D8_7CF732EA2069_HS_7.png",
     "width": 97,
     "height": 120,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 120.2
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_C511E4B1_D329_3D4E_41E6_D95D7E7DE4AD",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4F195B3A_4314_7F85_41AD_345B8304A185, this.camera_602DD7FC_752C_8D9D_41DC_68F9C1BE3C8C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15B90564_0671_9214_418A_9D432EE16C29",
   "pitch": -58.59,
   "yaw": -163.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.78,
   "distance": 100
  }
 ],
 "id": "overlay_09822F37_0633_AE74_4176_2D8D9611A530",
 "data": {
  "label": "Arrow 05"
 },
 "maps": [
  {
   "hfov": 12.78,
   "yaw": -163.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -58.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8, this.camera_603F97CD_752C_8DFF_41CF_43C1BD6BE57E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_16C1BBA5_0613_9614_4182_3FA02D4EFBA4",
   "pitch": -29.01,
   "yaw": -9.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.25,
   "distance": 100
  }
 ],
 "id": "overlay_092427F4_0630_9DF4_4193_6D095B857F5C",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 8.25,
   "yaw": -9.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_1_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6662E724_74DD_8EAD_41D2_8EE4DF0E75EA, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_668AA931_74EC_82A7_41D1_527B614EC359, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 18.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_10_0.png",
      "width": 433,
      "height": 433,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.71
  }
 ],
 "id": "overlay_2223F8D0_33AE_7F5C_41C2_6958FE998429",
 "data": {
  "label": "Pembakar Dupa"
 },
 "maps": [
  {
   "hfov": 20.04,
   "yaw": 18.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_22C4C135_3352_2EC4_41C7_39145E93BA2E, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_7EAB906A_74DC_82A5_41D1_F947043DCBB1, this.video_21A251FE_317B_2B34_41BB_B60AE8E29B4C, this.PlayList_64E2F65B_74ED_8E9B_41B1_9AB9B29AF62F, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 62.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.16,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_11_0.png",
      "width": 139,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91
  }
 ],
 "id": "overlay_21B6CB00_3352_D2BC_41C2_7FE8C35AFB89",
 "data": {
  "label": "Ulambana"
 },
 "maps": [
  {
   "hfov": 8.16,
   "yaw": 62.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6797328B_74DF_8664_41CC_1ECBF44AC371, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_67B4A48D_74DC_827F_41BE_013B67315BB3, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -57.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_12_0.png",
      "width": 334,
      "height": 342,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.19
  }
 ],
 "id": "overlay_2212E493_335E_77DC_41A3_9C4721489225",
 "data": {
  "label": "Atap Menara"
 },
 "maps": [
  {
   "hfov": 19.38,
   "yaw": -57.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_223BD06B_335D_EF4C_41C0_CFB02218A168, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_7EA5706A_74DC_82A5_41D7_DF542B3FB206, this.video_3F8B2A26_310F_D8D4_41C7_F971C4ECC3DD, this.PlayList_64E2566B_74ED_8EA4_41A4_887A7D7173F5, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -56.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_13_0.png",
      "width": 425,
      "height": 406,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.02
  }
 ],
 "id": "overlay_212270F8_335E_2F4C_41C8_859DF0E80242",
 "data": {
  "label": "Potehi"
 },
 "maps": [
  {
   "hfov": 23.54,
   "yaw": -56.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230VideoPlayer",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea17219"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea17220"
 }
},
{
 "id": "IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F",
 "backgroundOpacity": 0,
 "width": 32,
 "iconURL": "skin/IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C1668021_D31B_1265_41E7_1E7AF837C93F_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46352"
 }
},
{
 "id": "IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15",
 "backgroundOpacity": 0,
 "width": 32,
 "iconURL": "skin/IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C167D021_D31B_1265_41D7_A475EDE2AE15_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46341"
 }
},
{
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.viewer_uid61A17405_752C_826F_41D6_C64EECD15305",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "viewer_uid61A17405_752C_826F_41D6_C64EECD15305VideoPlayer",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid61A17405_752C_826F_41D6_C64EECD15305",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea17221"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF, this.camera_60B4F973_752C_82AB_41B1_548B58AD8D9A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_16C14BA5_0613_9614_4166_55DE65FD7E9A",
   "pitch": -21.26,
   "yaw": 79.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.38,
   "distance": 100
  }
 ],
 "id": "overlay_09AB8D22_0617_920C_4127_2182ECA5C330",
 "data": {
  "label": "Arrow 03b"
 },
 "maps": [
  {
   "hfov": 12.38,
   "yaw": 79.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157, this.camera_60863944_752C_82ED_41D8_223EA8F53A3A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15BAE564_0671_9214_4188_D29306B85C62",
   "pitch": -46.21,
   "yaw": 169.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.9,
   "distance": 100
  }
 ],
 "id": "overlay_16941CE7_0613_B214_4177_8A57495DF640",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 12.9,
   "yaw": 169.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0_HS_1_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -46.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46A",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46AVideoPlayer",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "viewer_uid61A403F5_752C_85AF_41A3_D6BA266DD2F4VideoPlayer",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "buttonPause": "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "viewerArea": "this.viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3",
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "viewer_uid61A603F5_752C_85AF_41B8_673DB4A6A2F3VideoPlayer",
 "buttonRestart": "this.IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid61A5E3F5_752C_85AF_41D5_9F16A649A46A",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea17218"
 }
},
{
 "id": "IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
 "backgroundOpacity": 0,
 "width": 40,
 "iconURL": "skin/IconButton_C1672021_D31B_1265_41D6_74F07FD5713F.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1672021_D31B_1265_41D6_74F07FD5713F_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_C1672021_D31B_1265_41D6_74F07FD5713F_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46347"
 }
},
{
 "id": "IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3",
 "backgroundOpacity": 0,
 "width": 40,
 "iconURL": "skin/IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C167C021_D31B_1265_41E2_27AD2FC9C3B3_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46342"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4F195B3A_4314_7F85_41AD_345B8304A185, this.camera_60968906_752C_826D_41D8_B5740AB46DB6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_16CEDBA5_0613_9614_4190_4B465A1470E2",
   "pitch": -11.87,
   "yaw": 61.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.99,
   "distance": 100
  }
 ],
 "id": "overlay_09EA9837_0630_9274_4182_199901EF9C14",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 9.99,
   "yaw": 61.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_0_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_483D1F5F_4314_37BB_41C7_F141A184FC90, this.camera_6060F8D7_752C_83EB_41D4_CFF4FAAA34FE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15B86564_0671_9214_4193_F56A1EF0A42E",
   "pitch": -33.52,
   "yaw": -112.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.23,
   "distance": 100
  }
 ],
 "id": "overlay_09BEE0D1_0633_F20C_4181_7087EE85CE6A",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -112.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_1_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9, this.camera_607378A8_752C_83A5_41CD_4A5668EB2AEE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_16CE5BA5_0613_9614_4190_E6AC57F1ADB9",
   "pitch": -17.23,
   "yaw": -81.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.04,
   "distance": 50
  }
 ],
 "id": "overlay_08912AD6_0630_9634_4196_E9CB8D1CC0AB",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "maps": [
  {
   "hfov": 4.04,
   "yaw": -81.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_66B38902_74EC_8265_41D7_4281ADF5B2A2, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_66631EA0_74EF_7FA5_41D7_76E7A4A8BFCA, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 3.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_9_0.png",
      "width": 443,
      "height": 359,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5
  }
 ],
 "id": "overlay_21B0BDFA_33B2_D14F_41B8_F67918C650F5",
 "data": {
  "label": "Rumah Tandu"
 },
 "maps": [
  {
   "hfov": 26.25,
   "yaw": 3.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_9_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_22FAC19B_33B2_31CD_41C3_AB8A2DB77906, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_7EAA4065_74DC_82AF_41D6_3997774B3E58, this.video_2121273A_317B_373D_41AB_A0E2651917A3, this.PlayList_64E5065B_74ED_8E9B_41D2_837D297982CD, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 138.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_10_0.png",
      "width": 358,
      "height": 369,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.22
  }
 ],
 "id": "overlay_21A69806_33B2_DEC4_41BD_921086C5BE02",
 "data": {
  "label": "Barongsai"
 },
 "maps": [
  {
   "hfov": 21.22,
   "yaw": 138.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_60C971F5_74E4_85AC_41D3_77FFF90A03EC, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_669A6A90_74E4_8665_41BE_7A8346EE9971, this.video_666918C3_74E4_83EB_41B1_C60C5EE93D2F, this.PlayList_62C01148_752C_82E4_4197_F4C913BB0DF9, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 92.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_11_0.png",
      "width": 167,
      "height": 193,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07
  }
 ],
 "id": "overlay_22072FCE_33AE_7147_4186_C08AB5837BC1",
 "data": {
  "label": "Chiu It"
 },
 "maps": [
  {
   "hfov": 9.91,
   "yaw": 92.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C0530613_D3FB_1D73_41C5_86E62B747157, this.camera_6043286A_752C_82A5_4170_9EAD042B3E23); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15B88564_0671_9214_416D_33C7E721BC63",
   "pitch": -20,
   "yaw": -16.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.66,
   "distance": 100
  }
 ],
 "id": "overlay_1635E185_0610_B214_4193_932AD24D9872",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 10.66,
   "yaw": -16.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_0_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_05F97973_0A7E_4689_41A3_C7BFF1616386",
   "pitch": -9.97,
   "yaw": 30.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.36,
   "distance": 100
  }
 ],
 "id": "overlay_1436B4B2_0611_920C_418E_20C04EE16C9B",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 10.36,
   "yaw": 30.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_2_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_05F9A973_0A7E_4689_419A_19CB9F220EA5",
   "pitch": -16.04,
   "yaw": 87.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.83,
   "distance": 100
  }
 ],
 "id": "overlay_16038FEE_0617_EE15_4180_35906E5A3869",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 8.83,
   "yaw": 87.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_3_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6581DD0A_74E5_8265_41DD_0EA0B8B2BAB7, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_7B53CB0F_74FC_867B_41C3_BC903CDD6152, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -123.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_14_0.png",
      "width": 172,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.58
  }
 ],
 "id": "overlay_23CFAD40_33B2_D6BC_41AD_FA61D9D62EA7",
 "data": {
  "label": "Tungku Api"
 },
 "maps": [
  {
   "hfov": 10.14,
   "yaw": -123.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6615CA4A_74E4_86E5_41D0_DFC451A07207, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_65666F77_74E5_9EAC_41BF_9143F2DDBC65, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 109.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.72,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_15_0.png",
      "width": 220,
      "height": 209,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.95
  }
 ],
 "id": "overlay_230D2BBC_33BE_D1CB_419A_68C94E46BFD4",
 "data": {
  "label": "Singa"
 },
 "maps": [
  {
   "hfov": 12.72,
   "yaw": 109.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_656F3A6F_74E4_86BC_41CA_F0D3D946CA83, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_65375238_74EB_86A5_41D5_026B2339663B, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 128.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_16_0.png",
      "width": 237,
      "height": 225,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78
  }
 ],
 "id": "overlay_23DD9E6F_33BE_3344_41AB_DEE4986D74F4",
 "data": {
  "label": "Pilar Naga"
 },
 "maps": [
  {
   "hfov": 14.09,
   "yaw": 128.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_16_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_658EFEB2_74EB_9FA4_41D1_964F9CB6F22E, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_668AA931_74EC_82A7_41D1_527B614EC359, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 162.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_17_0.png",
      "width": 326,
      "height": 239,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.8
  }
 ],
 "id": "overlay_2342AF08_33BE_52CB_41C1_80121B217D65",
 "data": {
  "label": "Pembakar Dupa"
 },
 "maps": [
  {
   "hfov": 17.25,
   "yaw": 162.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_17_0_0_map.gif",
      "width": 21,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_23FB3612_33B3_D2DC_41BE_A559D19204BC, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_7EA90060_74DC_82A5_41D4_11E3BB7788F6, this.video_3E903ABE_3104_D934_41C7_75D26EF576C9, this.PlayList_64E5B65B_74ED_8E9B_41AA_2DDBDA072921, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -81.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.67,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_18_0.png",
      "width": 148,
      "height": 186,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.8
  }
 ],
 "id": "overlay_22F084E8_33B2_574C_41C6_700B07941650",
 "data": {
  "label": "Cap Go Meh"
 },
 "maps": [
  {
   "hfov": 8.67,
   "yaw": -81.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_18_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid61BBB3E5_752C_85AF_41A0_3BDF3FDC0230",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea17217"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_553DC379_45A5_6D00_41C4_B94D2A946AC4",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_553DC379_45A5_6D00_41C4_B94D2A946AC4.png",
 "borderRadius": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_553DC379_45A5_6D00_41C4_B94D2A946AC4_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Hs visibility"
 }
},
{
 "id": "IconButton_C1676021_D31B_1265_41E4_6AF77CA1B97D",
 "backgroundOpacity": 0,
 "width": 40,
 "iconURL": "skin/IconButton_C1676021_D31B_1265_41E4_6AF77CA1B97D.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1676021_D31B_1265_41E4_6AF77CA1B97D_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C1676021_D31B_1265_41E4_6AF77CA1B97D_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46350"
 }
},
{
 "id": "IconButton_C1675021_D31B_1265_41D9_5255626CF6F6",
 "backgroundOpacity": 0,
 "width": 32,
 "iconURL": "skin/IconButton_C1675021_D31B_1265_41D9_5255626CF6F6.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1675021_D31B_1265_41D9_5255626CF6F6_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C1675021_D31B_1265_41D9_5255626CF6F6_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46348"
 }
},
{
 "id": "IconButton_C167F021_D31B_1265_41E6_0BD63FAF7D0C",
 "backgroundOpacity": 0,
 "width": 40,
 "iconURL": "skin/IconButton_C167F021_D31B_1265_41E6_0BD63FAF7D0C.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C167F021_D31B_1265_41E6_0BD63FAF7D0C_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C167F021_D31B_1265_41E6_0BD63FAF7D0C_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46343"
 }
},
{
 "id": "IconButton_C1674021_D31B_1265_41B5_3A0FC8917CB9",
 "backgroundOpacity": 0,
 "width": 32,
 "iconURL": "skin/IconButton_C1674021_D31B_1265_41B5_3A0FC8917CB9.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1674021_D31B_1265_41B5_3A0FC8917CB9_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C1674021_D31B_1265_41B5_3A0FC8917CB9_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46349"
 }
},
{
 "id": "IconButton_C1673021_D31B_1265_41D0_DB01709377F8",
 "backgroundOpacity": 0,
 "width": 32,
 "iconURL": "skin/IconButton_C1673021_D31B_1265_41D0_DB01709377F8.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C1673021_D31B_1265_41D0_DB01709377F8_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C1673021_D31B_1265_41D0_DB01709377F8_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46346"
 }
},
{
 "id": "IconButton_C167E021_D31B_1265_41DE_55BD884FC156",
 "backgroundOpacity": 0,
 "width": 32,
 "iconURL": "skin/IconButton_C167E021_D31B_1265_41DE_55BD884FC156.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_C167E021_D31B_1265_41DE_55BD884FC156_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 32,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_C167E021_D31B_1265_41DE_55BD884FC156_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button46344"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_553DE379_45A5_6D00_41A9_32B8D2EFFACF",
 "backgroundOpacity": 0,
 "width": 34,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_553DE379_45A5_6D00_41A9_32B8D2EFFACF.png",
 "borderRadius": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 34,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_553DE379_45A5_6D00_41A9_32B8D2EFFACF_pressed.png",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Gyroscopic"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_553F3379_45A5_6D00_41D1_2AD363CF8348",
 "backgroundOpacity": 0,
 "width": 30,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_553F3379_45A5_6D00_41D1_2AD363CF8348.png",
 "borderRadius": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "shadow": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4F1B773F_4314_17FB_41CF_E6F26B9335ED, this.camera_600E678F_752C_8E7B_4180_BAA18EFA6291); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_45E799E7_4A96_C516_41CF_870B4422DE16",
   "pitch": -26.33,
   "yaw": -76.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.72,
   "distance": 100
  }
 ],
 "id": "overlay_5B6ACB29_4A9A_C51D_41CA_3A2D29636D60",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 16.72,
   "yaw": -76.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_1_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4829BF93_4314_168B_41AA_ED394498D4DF, this.camera_60185760_752C_8EA5_41D3_A23C1B6FAF1B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F233F1C3_FCD7_78E1_41ED_8B1C4CCFB6B0",
   "pitch": -26.77,
   "yaw": 138.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.98,
   "distance": 100
  }
 ],
 "id": "overlay_F249AE97_FCD5_6B61_41ED_DB818E375441",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 14.98,
   "yaw": 138.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_2_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9, this.camera_61E80722_752C_8EA5_41C7_83E2CB2AC523); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_15465555_0671_9234_4189_60D776D2F9DD",
   "pitch": -27.94,
   "yaw": 37.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.64,
   "distance": 100
  }
 ],
 "id": "overlay_08F5E168_0610_B21C_415E_2BA80E9FF570",
 "data": {
  "label": "Arrow 03c"
 },
 "maps": [
  {
   "hfov": 14.64,
   "yaw": 37.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_3_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_64BD677D_74FB_8E9F_41D6_9BC551269C14, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, this.audio_7B53CB0F_74FC_867B_41C3_BC903CDD6152, true)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -19.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_6_0.png",
      "width": 343,
      "height": 300,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86
  }
 ],
 "id": "overlay_2376171B_33B6_52CC_4174_07CA3784197A",
 "data": {
  "label": "Tungku Api"
 },
 "maps": [
  {
   "hfov": 20.09,
   "yaw": -19.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_6_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "children": [
  "this.Container_553DA379_45A5_6D00_41C7_6C4CFC316CB6",
  "this.IconButton_553DD379_45A5_6D00_41D0_BD738F38FF3B"
 ],
 "id": "Container_553DB379_45A5_6D00_41BF_2C8E5E923B8A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 72,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "100%",
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "children": [
  "this.Container_553DF379_45A5_6D00_41CD_B4AA3BEA63DF",
  "this.IconButton_553E3379_45A5_6D00_41CA_06BF3ED9E089"
 ],
 "id": "Container_553DC379_45A5_6D00_41CD_A60790C8484A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "100%",
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "children": [
  "this.IconButton_C1673021_D31B_1265_41D0_DB01709377F8",
  "this.IconButton_C1672021_D31B_1265_41D6_74F07FD5713F",
  "this.IconButton_C1675021_D31B_1265_41D9_5255626CF6F6"
 ],
 "id": "Container_C1670021_D31B_1265_41CA_30DAD0C61508",
 "backgroundOpacity": 0,
 "width": 40,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "hidden",
 "class": "Container",
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 4,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "height": "100%",
 "data": {
  "name": "Container46345"
 }
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_2_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1547B555_0671_9234_4153_6726852BBA00",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_3_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5837F1_FC55_38BE_41E9_F6C671A86C00",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_4_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_16CC3BA5_0613_9614_4198_117EEF570571",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_48562D74_4314_1B8D_41BE_F58BB549CCE9_0_HS_5_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_16CFFBA5_0613_9614_418E_DA9FCF6F151C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_0_0.png",
   "width": 460,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_15B90564_0671_9214_418A_9D432EE16C29",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C0530613_D3FB_1D73_41C5_86E62B747157_0_HS_1_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_16C1BBA5_0613_9614_4182_3FA02D4EFBA4",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_16C14BA5_0613_9614_4166_55DE65FD7E9A",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4F195B3A_4314_7F85_41AD_345B8304A185_0_HS_1_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_15BAE564_0671_9214_4188_D29306B85C62",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_0_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_16CEDBA5_0613_9614_4190_4B465A1470E2",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_1_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_15B86564_0671_9214_4193_F56A1EF0A42E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_4829BF93_4314_168B_41AA_ED394498D4DF_0_HS_2_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_16CE5BA5_0613_9614_4190_E6AC57F1ADB9",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_0_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_15B88564_0671_9214_416D_33C7E721BC63",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_2_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_05F97973_0A7E_4689_41A3_C7BFF1616386",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_482AAC05_4314_F98F_41C4_4E9D2EAE17F8_0_HS_3_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_05F9A973_0A7E_4689_419A_19CB9F220EA5",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_1_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_45E799E7_4A96_C516_41CF_870B4422DE16",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_2_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F233F1C3_FCD7_78E1_41ED_8B1C4CCFB6B0",
 "frameDuration": 41
},
{
 "colCount": 5,
 "frameCount": 30,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_483D1F5F_4314_37BB_41C7_F141A184FC90_0_HS_3_0.png",
   "width": 925,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_15465555_0671_9234_4189_60D776D2F9DD",
 "frameDuration": 41
},
{
 "height": "100%",
 "id": "Container_553DA379_45A5_6D00_41C7_6C4CFC316CB6",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container black"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_553DD379_45A5_6D00_41D0_BD738F38FF3B",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_553DD379_45A5_6D00_41D0_BD738F38FF3B.png",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_553DD379_45A5_6D00_41D0_BD738F38FF3B_rollover.png",
 "transparencyActive": true,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_553DC379_45A5_6D00_41CD_A60790C8484A, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_553DB379_45A5_6D00_41BF_2C8E5E923B8A, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "paddingLeft": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "children": [
  "this.Image_553DE379_45A5_6D00_41CF_6EABDEA87D7D",
  "this.Container_553E0379_45A5_6D00_41C9_C4EA05C15FA9",
  "this.Container_553EE379_45A5_6D00_41C8_158DD932EBAF"
 ],
 "height": "100%",
 "id": "Container_553DF379_45A5_6D00_41CD_B4AA3BEA63DF",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "width": 300,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 40,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 40,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 40,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container"
 }
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_553E3379_45A5_6D00_41CA_06BF3ED9E089",
 "backgroundOpacity": 0,
 "width": 44,
 "right": 9,
 "iconURL": "skin/IconButton_553E3379_45A5_6D00_41CA_06BF3ED9E089.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_553E3379_45A5_6D00_41CA_06BF3ED9E089_rollover.png",
 "transparencyActive": false,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_553DC379_45A5_6D00_41CD_A60790C8484A, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_553DB379_45A5_6D00_41BF_2C8E5E923B8A, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "paddingLeft": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_553DE379_45A5_6D00_41CF_6EABDEA87D7D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_553DE379_45A5_6D00_41CF_6EABDEA87D7D.png",
 "class": "Image",
 "minHeight": 30,
 "propagateClick": true,
 "verticalAlign": "top",
 "top": "0%",
 "borderSize": 0,
 "minWidth": 40,
 "paddingRight": 0,
 "paddingLeft": 0,
 "shadow": false,
 "height": "25%",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 }
},
{
 "children": [
  "this.Container_553E3379_45A5_6D00_41B0_1A018DC40E49",
  "this.Button_553E2379_45A5_6D00_41B3_01B08B1A1A2A",
  "this.Container_553E5379_45A5_6D00_41C9_B443F44E7416",
  "this.Button_553E4379_45A5_6D00_41CA_6480CDFCBF0D",
  "this.Container_553E7379_45A5_6D00_41CE_1AF491C2EFAA",
  "this.Button_553E6379_45A5_6D00_41B9_8C08174B29C1",
  "this.Container_553E9379_45A5_6D00_41C5_41C735C5390B",
  "this.Button_553E8379_45A5_6D00_41CA_D8421F758DBA",
  "this.Container_553EB379_45A5_6D00_41C0_33CE52FF9595",
  "this.Button_553EA379_45A5_6D00_41C3_4C7137DCF954",
  "this.Container_553ED379_45A5_6D00_41B0_AC7D66C1D5D8",
  "this.Button_553EC379_45A5_6D00_41C3_67E4B61BEC9C",
  "this.Container_553EF379_45A5_6D00_41B7_76F1F2AE2AAC"
 ],
 "id": "Container_553E0379_45A5_6D00_41C9_C4EA05C15FA9",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "class": "Container",
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "top": "25%",
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 }
},
{
 "children": [
  "this.Container_553F1379_45A5_6D00_41D0_5D15CB2CF462",
  "this.Container_553F0379_45A5_6D00_41CD_D5EA6CD918BC",
  "this.HTMLText_553E1379_45A5_6D00_41C6_5942EEDDC473"
 ],
 "id": "Container_553EE379_45A5_6D00_41C8_158DD932EBAF",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "class": "Container",
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "height": 120,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Container footer"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553E3379_45A5_6D00_41B0_1A018DC40E49",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Calibri",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_553E2379_45A5_6D00_41B3_01B08B1A1A2A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "layout": "horizontal",
 "class": "Button",
 "iconWidth": 32,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "16px",
 "label": "Tour Information (\u4f7f\u7528\u5bfc\u89c8)",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Button_553E2379_45A5_6D00_41B3_01B08B1A1A2A, true, 0, null, null, false); this.openLink('files/file_62C1E148_752C_82E4_41D6_5692FD7201D6.pdf', '_blank')",
 "paddingLeft": 10,
 "shadow": false,
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553E5379_45A5_6D00_41C9_B443F44E7416",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Calibri",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Quiz"
 },
 "id": "Button_553E4379_45A5_6D00_41CA_6480CDFCBF0D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "layout": "horizontal",
 "class": "Button",
 "iconWidth": 32,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "16px",
 "label": "Quiz (\u5c0f\u6d4b\u9a8c)",
 "backgroundColorDirection": "vertical",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Button_553E4379_45A5_6D00_41CA_6480CDFCBF0D, true, 0, null, null, false); this.openLink('https://quizizz.com/join?gc=56037524', '_blank')",
 "paddingLeft": 10,
 "shadow": false,
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553E7379_45A5_6D00_41CE_1AF491C2EFAA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Calibri",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_553E6379_45A5_6D00_41B9_8C08174B29C1",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "layout": "horizontal",
 "class": "Button",
 "iconWidth": 32,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Location",
 "height": 50,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "16px",
 "label": "Location (\u5730\u70b9)",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.openLink('https://maps.app.goo.gl/mBsQRBCWjuZ6phus8', '_blank'); this.setComponentVisibility(this.Button_553EC379_45A5_6D00_41C3_67E4B61BEC9C, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadow": false,
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553E9379_45A5_6D00_41C5_41C735C5390B",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Calibri",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_553E8379_45A5_6D00_41CA_D8421F758DBA",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "layout": "horizontal",
 "class": "Button",
 "iconWidth": 32,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "16px",
 "label": "Floorplan (\u697c\u5c42\u5730\u56fe)",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setMediaBehaviour(this.playList_61B723B7_752C_85AC_41D9_03571B2E75CF, 0); this.setComponentVisibility(this.MapViewer, true, 0, null, null, false); this.setComponentVisibility(this.MapViewer, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadow": false,
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553EB379_45A5_6D00_41C0_33CE52FF9595",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Calibri",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_553EA379_45A5_6D00_41C3_4C7137DCF954",
 "backgroundOpacity": 0,
 "width": "53.667%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "layout": "horizontal",
 "class": "Button",
 "iconWidth": 32,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "16px",
 "label": "Content (\u8d44\u6599)",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Button_553EA379_45A5_6D00_41C3_4C7137DCF954, true, 0, null, null, false); this.openLink('files/file_602CE0CD_7018_5243_41CF_24D9709A5195.pdf', '_blank')",
 "paddingLeft": 10,
 "shadow": false,
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553ED379_45A5_6D00_41B0_AC7D66C1D5D8",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Calibri",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_553EC379_45A5_6D00_41C3_67E4B61BEC9C",
 "backgroundOpacity": 0,
 "width": "53.636%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "layout": "horizontal",
 "class": "Button",
 "iconWidth": 32,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "fontSize": "16px",
 "label": "Contact Information (\u8054\u7cfb\u4fe1\u606f)",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.openLink('https://wa.me/+6289602422292', '_blank'); this.setComponentVisibility(this.Button_553EC379_45A5_6D00_41C3_67E4B61BEC9C, true, 0, null, null, false)",
 "paddingLeft": 10,
 "shadow": false,
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left",
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553EF379_45A5_6D00_41B7_76F1F2AE2AAC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "line"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_553F1379_45A5_6D00_41D0_5D15CB2CF462",
 "backgroundOpacity": 1,
 "width": 40,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "height": 2,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "blue line"
 }
},
{
 "children": [
  "this.IconButton_553F3379_45A5_6D00_41D1_2AD363CF8348",
  "this.IconButton_553DA379_45A5_6D00_4181_722365E3DD8C",
  "this.IconButton_553DC379_45A5_6D00_41C4_B94D2A946AC4",
  "this.IconButton_553DF379_45A5_6D00_41AA_00F4FD0B7986",
  "this.IconButton_553DE379_45A5_6D00_41A9_32B8D2EFFACF"
 ],
 "id": "Container_553F0379_45A5_6D00_41CD_D5EA6CD918BC",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 16,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Container settings"
 }
},
{
 "id": "HTMLText_553E1379_45A5_6D00_41C6_5942EEDDC473",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": true,
 "height": 78,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
}],
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_553DA379_45A5_6D00_4181_722365E3DD8C",
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
