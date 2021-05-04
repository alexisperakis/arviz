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
    
      
      
    
      var element = document.getElementById("811f4ca2-ff81-4287-9189-90ca387504b8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '811f4ca2-ff81-4287-9189-90ca387504b8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e97483ab-ef61-4c77-ae0b-2e2a0ad701dd":{"defs":[],"roots":{"references":[{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14260","type":"Scatter"},{"attributes":{},"id":"14242","type":"PanTool"},{"attributes":{},"id":"14227","type":"DataRange1d"},{"attributes":{"text":"centered model - non centered model"},"id":"14264","type":"Title"},{"attributes":{},"id":"14276","type":"Selection"},{"attributes":{},"id":"14270","type":"AllLabels"},{"attributes":{},"id":"14229","type":"LinearScale"},{"attributes":{},"id":"14225","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14249"}},"id":"14243","type":"BoxZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14276"},"selection_policy":{"id":"14275"}},"id":"14261","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"14279"},"toolbar_location":"above"},"id":"14280","type":"ToolbarBox"},{"attributes":{},"id":"14244","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"14233"}],"center":[{"id":"14236"},{"id":"14240"}],"height":288,"left":[{"id":"14237"}],"output_backend":"webgl","renderers":[{"id":"14262"}],"title":{"id":"14264"},"toolbar":{"id":"14251"},"toolbar_location":null,"width":432,"x_range":{"id":"14225"},"x_scale":{"id":"14229"},"y_range":{"id":"14227"},"y_scale":{"id":"14231"}},"id":"14224","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14231","type":"LinearScale"},{"attributes":{},"id":"14268","type":"BasicTickFormatter"},{"attributes":{},"id":"14246","type":"UndoTool"},{"attributes":{},"id":"14271","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14250"}},"id":"14245","type":"LassoSelectTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14268"},"major_label_policy":{"id":"14267"},"ticker":{"id":"14238"}},"id":"14237","type":"LinearAxis"},{"attributes":{"formatter":{"id":"14271"},"major_label_policy":{"id":"14270"},"ticker":{"id":"14234"}},"id":"14233","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14249","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"14280"},{"id":"14278"}]},"id":"14281","type":"Column"},{"attributes":{"axis":{"id":"14233"},"ticker":null},"id":"14236","type":"Grid"},{"attributes":{"source":{"id":"14261"}},"id":"14263","type":"CDSView"},{"attributes":{},"id":"14241","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"14251"}],"tools":[{"id":"14241"},{"id":"14242"},{"id":"14243"},{"id":"14244"},{"id":"14245"},{"id":"14246"},{"id":"14247"},{"id":"14248"}]},"id":"14279","type":"ProxyToolbar"},{"attributes":{},"id":"14275","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"14241"},{"id":"14242"},{"id":"14243"},{"id":"14244"},{"id":"14245"},{"id":"14246"},{"id":"14247"},{"id":"14248"}]},"id":"14251","type":"Toolbar"},{"attributes":{},"id":"14234","type":"BasicTicker"},{"attributes":{},"id":"14267","type":"AllLabels"},{"attributes":{},"id":"14238","type":"BasicTicker"},{"attributes":{},"id":"14247","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14250","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"14261"},"glyph":{"id":"14260"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14263"}},"id":"14262","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"14224"},0,0]]},"id":"14278","type":"GridBox"},{"attributes":{"callback":null},"id":"14248","type":"HoverTool"},{"attributes":{"axis":{"id":"14237"},"dimension":1,"ticker":null},"id":"14240","type":"Grid"}],"root_ids":["14281"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"e97483ab-ef61-4c77-ae0b-2e2a0ad701dd","root_ids":["14281"],"roots":{"14281":"811f4ca2-ff81-4287-9189-90ca387504b8"}}];
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