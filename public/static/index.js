seajs.use([
        'jquery',
        'arale-sticky',
        'word-color',
        'arale-autocomplete',
        'keymaster',
        'moment'],
    function ($, Sticky, wordColor, Autocomplete, key, moment) {
        var modules = [];
        var deprecatedModules = '';
        var urls = [
            'http://223.252.220.53:3000/repository/search?q=epay&define'
        ];

        seajs.use(urls, function (arale) {

            if ($('#module-wrapper').length === 0) {
                return
            }
            var data = processData(arale)
            var Handlebars = seajs.require('static/handlebars-v1.3.0')

            var modulesTpl = '{{#category}}<h2 id="index-{{name}}"><span class="catigory">epay-{{name}}</span></h2>  <div class="modules">    {{#modules}}  <div class="module"><span class="module-name">{{name}}</span><span class="module-description">{{description}}</span><select class="module-version">{{#versions}}<option>{{version}}</option>{{/versions}}</select><span class="module-home"><a href="http://modules.epay.163.com:3000/docs/epay-{{name}}/latest/" target="_blank">详情</a></span></div>{{/modules}}</div>{{/category}}'
            var modulesTpl = Handlebars.compile(modulesTpl)
            var htmlEle = modulesTpl(data)
            $('#module-wrapper').append(htmlEle)

        });

        function processData(orginDate) {
            var orginDate = orginDate.data.results,
                indexObject = {},
                resultData = {"category": []}

            //将数据封装到indexObject中
            orginDate.forEach(function (module, index, array) {
                var arr = module.name.split('-')
                arr.shift()
                var name = arr.join('-')

                if (name) {
                    var categoryName = name[0].toUpperCase()
                    var tempModule = {
                        "name": name,
                        "description": module.description,
                        "versions": []
                    }
                    module.versions.forEach(function (value, index) {
                        tempModule.versions.push({"version": value})
                    })

                    if (indexObject[categoryName]) {
                        indexObject[categoryName].push(tempModule)
                    } else {
                        indexObject[categoryName] = [tempModule]
                    }
                }
            })

            var tempCategory,
                i,
                tempCategoryName
            for (i = 65; i <= 90; i++) {
                tempCategoryName = String.fromCharCode(i)
                tempCategory = indexObject[tempCategoryName]
                tempCategory && resultData.category.push({
                    "name": tempCategoryName,
                    "modules": tempCategory
                })
            }

            return resultData


        }

        $('#module-wrapper').on('change', '.module-version', function (e) {
            var $target = $(e.target)
            var $linkEle = $target.closest('.module').find('.module-home a')
            var originLink = $linkEle.attr('href')
            var indexAtVersion = originLink.lastIndexOf('/', [originLink.length - 2])
            $linkEle.attr('href', originLink.slice(0, indexAtVersion) + '/' + $target.val() + '/')
        })

    });
