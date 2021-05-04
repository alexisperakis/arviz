(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("da8877e1-35af-4556-a499-e3dcb94061db");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da8877e1-35af-4556-a499-e3dcb94061db' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"bbf1b5ef-0782-4064-b896-c309136639c9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17735","type":"WheelZoomTool"},{"attributes":{},"id":"17769","type":"BasicTickFormatter"},{"attributes":{},"id":"17765","type":"AllLabels"},{"attributes":{},"id":"17738","type":"SaveTool"},{"attributes":{},"id":"17776","type":"Selection"},{"attributes":{},"id":"17737","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"17742"}],"tools":[{"id":"17732"},{"id":"17733"},{"id":"17734"},{"id":"17735"},{"id":"17736"},{"id":"17737"},{"id":"17738"},{"id":"17739"}]},"id":"17779","type":"ProxyToolbar"},{"attributes":{},"id":"17773","type":"UnionRenderers"},{"attributes":{"below":[{"id":"17724"}],"center":[{"id":"17727"},{"id":"17731"}],"height":500,"left":[{"id":"17728"}],"output_backend":"webgl","renderers":[{"id":"17754"},{"id":"17758"},{"id":"17760"},{"id":"17761"}],"title":{"id":"17762"},"toolbar":{"id":"17742"},"toolbar_location":null,"width":500,"x_range":{"id":"17716"},"x_scale":{"id":"17720"},"y_range":{"id":"17718"},"y_scale":{"id":"17722"}},"id":"17715","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"17757"}},"id":"17759","type":"CDSView"},{"attributes":{"children":[[{"id":"17715"},0,0]]},"id":"17778","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17740","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17774"},"selection_policy":{"id":"17773"}},"id":"17751","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17766"},"major_label_policy":{"id":"17765"},"ticker":{"id":"17729"}},"id":"17728","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17741"}},"id":"17736","type":"LassoSelectTool"},{"attributes":{},"id":"17722","type":"LinearScale"},{"attributes":{},"id":"17766","type":"BasicTickFormatter"},{"attributes":{},"id":"17716","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17776"},"selection_policy":{"id":"17775"}},"id":"17757","type":"ColumnDataSource"},{"attributes":{},"id":"17775","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17769"},"major_label_policy":{"id":"17768"},"ticker":{"id":"17725"}},"id":"17724","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"17762","type":"Title"},{"attributes":{"data_source":{"id":"17757"},"glyph":{"id":"17756"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17759"}},"id":"17758","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17741","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17753","type":"Circle"},{"attributes":{"axis":{"id":"17724"},"ticker":null},"id":"17727","type":"Grid"},{"attributes":{"overlay":{"id":"17740"}},"id":"17734","type":"BoxZoomTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17761","type":"Span"},{"attributes":{"active_multi":null,"tools":[{"id":"17732"},{"id":"17733"},{"id":"17734"},{"id":"17735"},{"id":"17736"},{"id":"17737"},{"id":"17738"},{"id":"17739"}]},"id":"17742","type":"Toolbar"},{"attributes":{},"id":"17768","type":"AllLabels"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17760","type":"Span"},{"attributes":{},"id":"17720","type":"LinearScale"},{"attributes":{},"id":"17718","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"17779"},"toolbar_location":"above"},"id":"17780","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"17739","type":"HoverTool"},{"attributes":{},"id":"17725","type":"BasicTicker"},{"attributes":{},"id":"17774","type":"Selection"},{"attributes":{"children":[{"id":"17780"},{"id":"17778"}]},"id":"17781","type":"Column"},{"attributes":{},"id":"17729","type":"BasicTicker"},{"attributes":{"source":{"id":"17751"}},"id":"17755","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17752","type":"Circle"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17756","type":"Scatter"},{"attributes":{"axis":{"id":"17728"},"dimension":1,"ticker":null},"id":"17731","type":"Grid"},{"attributes":{},"id":"17732","type":"ResetTool"},{"attributes":{"data_source":{"id":"17751"},"glyph":{"id":"17752"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17753"},"view":{"id":"17755"}},"id":"17754","type":"GlyphRenderer"},{"attributes":{},"id":"17733","type":"PanTool"}],"root_ids":["17781"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"bbf1b5ef-0782-4064-b896-c309136639c9","root_ids":["17781"],"roots":{"17781":"da8877e1-35af-4556-a499-e3dcb94061db"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();