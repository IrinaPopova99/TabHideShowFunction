# TabHideShowFunction
This is a function for hide or show a content in tabs

## Getting Started

It is just a Javascript file. You can copy the code and paste into your code or download this file. See deployment for notes on how to deploy the project on a live system.

## Deployment

Call function `tabHideShow` and pass 5 parameters:

#### infoHeaderTab
This parameter is a name of the class. The name is for a block which contains a header of a tab. 
In your HTML it can be like:
```
<div class="info-header-tab">Title1</div>
<div class="info-header-tab">Title2</div>
<div class="info-header-tab">Title3</div>
<div class="info-header-tab">Title4</div>
```
infoHeaderTab is `.info-header-tab`

#### infoHeader
This parameter is a name of the class. The name is for a block which contains tabs (contains infoHeaderTab). 
In your HTML it can be like:
```
<div class="info-header">
  <div class="info-header-tab">Лечение</div>
  <div class="info-header-tab">Отдых</div>
  <div class="info-header-tab">Природа</div>
  <div class="info-header-tab">Йога</div>
</div>
```
infoHeader is `.info-header`

#### infoTabContent
This parameter is a name of the class. The name is for a block which contains information (photos, text, titles) for tabs.
In your HTML it can be like:
```
<div class="info-tabcontent fade">
  <div class="description">
    <div class="description-title">TITLE</div>
    <div class="description-text">TEXT</div>
    <div class="description-btn">
      More
    </div>
  </div>
  <div class="photo">
    <img src="img/massage.jpg" alt="Massage">
  </div>
</div>
```
infoTabContent is `.info-tabcontent`

#### classShow
This parameter is a name of the class. This is CSS class with styles.
In your CSS it can be like:
```
.show {
  display: flex;
}
```
classShow is `.show`

#### classHide
This parameter is a name of the class. This is CSS class with styles.
In your CSS it can be like:
```
.hide {
  display:none;
}
```
classHide is `.hide`
