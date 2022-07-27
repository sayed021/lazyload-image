<sly data-sly-use.imageExtensionUse = "com.abbvie.commons.core.models.ImageExtensionModel"></sly>
<sly data-sly-use.formattedLink="${'com.abbvie.commons.core.components.use.LinkFormatterUse' @ link=properties.linkTo }"></sly>
<div class="image-container ${properties.imageAlignment}">
    <a data-sly-attribute.href="${formattedLink.url ? formattedLink.url : ''}"
       target="${properties.targetType}"
       title="${properties.linkTitle}"
       alt="${properties.alt}"
       class="${properties.imageSize}"
    >
        <sly data-sly-list.deviceImage="${imageExtensionUse.deviceImageList}">
            <sly data-sly-test="${deviceImage.srcImagePath}">
                <img
                        class="${properties.removeSpacing} ${deviceImage.cssClass} img-fluid"
                        src="${(deviceImage.srcImagePath ? deviceImage.srcImagePath : '') @ context='html'}"
                        data-sly-attribute.data-srcset="${deviceImage.srcSetImagePaths ? deviceImage.srcSetImagePaths : ''}"
                        alt="${deviceImage.altText}"
                        title="${deviceImage.altText}">
            </sly>
        </sly>
    </a>
</div>