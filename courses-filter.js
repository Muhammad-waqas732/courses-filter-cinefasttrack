/* 
With 7.1 Portfolio collections the only way to paste some keywords is text in SEO Description. 
So use it in next format: 
Tags: Tag 1, Tag 2, Tag3
*/
window.customFilterSettings = {
    'targets': [{
        container: '#gridThumbs',
        items: '.grid-item',
        settings: {
            view: "buttons-pill",
            position: 'top',
            align: 'center',
            wrapFilterContainer: true,
            mobilePanel: {
                enabled: false
			},
            showItemsCount: false,
            handleImagesLoading: true,
            useSQSProxy: { 
                enabled: false
            },
            hooks: {
                afterInit: function(f) {
                    f.customFiltersWrapper.addClass('portfolio-grid-basic');
                },
                beforeFilter: function(f) {
                    f.items.removeClass('preFade').removeClass('fadeIn')
                }
            },
            filter: {
                category: false,
                tag: false,
                items: [{
                    name: 'Tags',
                    defined: true,
                    multiple: false,
                    showAll: true,
                    allOption: 'All',
                    getAttr: function(el, data) {//custom function to get tags from SEO Description.
                        if (data && data.seoData && data.seoData.seoDescription && data.seoData.seoDescription.indexOf('Tags:') > -1) {
                            var res = data.seoData.seoDescription.split('Tags:')[1];
                            return res.split(',')
                        }
                    }
                }]
            },
            simpleFilter: {
                anim: true,
                show: {
                    effect: 'fade',
                    transitionDuration: 500,
                    stagger: 100
                },
                hide: {
                    effect: 'fade',
                    transitionDuration: 300,
                    stagger: 800
                }
            },
            sort: {
                enabled: false
            },
            search: {
                text: '',
                enabled: false
            }
        }
    }]
};
