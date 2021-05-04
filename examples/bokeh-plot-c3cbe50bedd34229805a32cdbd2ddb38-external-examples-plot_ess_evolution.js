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
    
      
      
    
      var element = document.getElementById("6fb77aa0-e999-4179-bc8c-a4d01fba31d0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6fb77aa0-e999-4179-bc8c-a4d01fba31d0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fe75c393-bd38-4443-8b0e-534678fa7d4f":{"defs":[],"roots":{"references":[{"attributes":{"toolbar":{"id":"17644"},"toolbar_location":"above"},"id":"17645","type":"ToolbarBox"},{"attributes":{},"id":"17585","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17580"},{"id":"17581"},{"id":"17582"},{"id":"17583"},{"id":"17584"},{"id":"17585"},{"id":"17586"},{"id":"17587"}]},"id":"17590","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17611","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17639"},"selection_policy":{"id":"17638"}},"id":"17609","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17589"}},"id":"17584","type":"LassoSelectTool"},{"attributes":{},"id":"17630","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17589","type":"PolyAnnotation"},{"attributes":{"source":{"id":"17609"}},"id":"17613","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17610","type":"Line"},{"attributes":{},"id":"17636","type":"UnionRenderers"},{"attributes":{"source":{"id":"17599"}},"id":"17603","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17588","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17601","type":"Circle"},{"attributes":{},"id":"17637","type":"Selection"},{"attributes":{"source":{"id":"17614"}},"id":"17618","type":"CDSView"},{"attributes":{"source":{"id":"17604"}},"id":"17608","type":"CDSView"},{"attributes":{"overlay":{"id":"17588"}},"id":"17582","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17615","type":"Circle"},{"attributes":{},"id":"17639","type":"Selection"},{"attributes":{},"id":"17577","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17616","type":"Circle"},{"attributes":{},"id":"17638","type":"UnionRenderers"},{"attributes":{},"id":"17568","type":"LinearScale"},{"attributes":{},"id":"17634","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17604"},"glyph":{"id":"17605"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17606"},"view":{"id":"17608"}},"id":"17607","type":"GlyphRenderer"},{"attributes":{},"id":"17626","type":"AllLabels"},{"attributes":{},"id":"17586","type":"SaveTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17630"},"major_label_policy":{"id":"17629"},"ticker":{"id":"17573"}},"id":"17572","type":"LinearAxis"},{"attributes":{},"id":"17573","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17590"}],"tools":[{"id":"17580"},{"id":"17581"},{"id":"17582"},{"id":"17583"},{"id":"17584"},{"id":"17585"},{"id":"17586"},{"id":"17587"}]},"id":"17644","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"17587","type":"HoverTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17617"},{"id":"17612"}]},"id":"17622","type":"LegendItem"},{"attributes":{},"id":"17641","type":"Selection"},{"attributes":{},"id":"17581","type":"PanTool"},{"attributes":{},"id":"17635","type":"Selection"},{"attributes":{},"id":"17570","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17606","type":"Line"},{"attributes":{"above":[{"id":"17620"}],"below":[{"id":"17572"}],"center":[{"id":"17575"},{"id":"17579"}],"height":500,"left":[{"id":"17576"}],"output_backend":"webgl","renderers":[{"id":"17602"},{"id":"17607"},{"id":"17612"},{"id":"17617"},{"id":"17619"}],"title":{"id":"17623"},"toolbar":{"id":"17590"},"toolbar_location":null,"width":500,"x_range":{"id":"17564"},"x_scale":{"id":"17568"},"y_range":{"id":"17566"},"y_scale":{"id":"17570"}},"id":"17563","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"17576"},"dimension":1,"ticker":null},"id":"17579","type":"Grid"},{"attributes":{},"id":"17627","type":"BasicTickFormatter"},{"attributes":{"click_policy":"hide","items":[{"id":"17621"},{"id":"17622"}],"location":"center_right","orientation":"horizontal"},"id":"17620","type":"Legend"},{"attributes":{"children":[{"id":"17645"},{"id":"17643"}]},"id":"17646","type":"Column"},{"attributes":{},"id":"17566","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17599"},"glyph":{"id":"17600"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17601"},"view":{"id":"17603"}},"id":"17602","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17641"},"selection_policy":{"id":"17640"}},"id":"17614","type":"ColumnDataSource"},{"attributes":{"text":"b"},"id":"17623","type":"Title"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17619","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17600","type":"Circle"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17627"},"major_label_policy":{"id":"17626"},"ticker":{"id":"17577"}},"id":"17576","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17635"},"selection_policy":{"id":"17634"}},"id":"17599","type":"ColumnDataSource"},{"attributes":{},"id":"17583","type":"WheelZoomTool"},{"attributes":{},"id":"17640","type":"UnionRenderers"},{"attributes":{"axis":{"id":"17572"},"ticker":null},"id":"17575","type":"Grid"},{"attributes":{"children":[[{"id":"17563"},0,0]]},"id":"17643","type":"GridBox"},{"attributes":{"data_source":{"id":"17614"},"glyph":{"id":"17615"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17616"},"view":{"id":"17618"}},"id":"17617","type":"GlyphRenderer"},{"attributes":{},"id":"17629","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17637"},"selection_policy":{"id":"17636"}},"id":"17604","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17605","type":"Line"},{"attributes":{},"id":"17580","type":"ResetTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17602"},{"id":"17607"}]},"id":"17621","type":"LegendItem"},{"attributes":{},"id":"17564","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17609"},"glyph":{"id":"17610"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17611"},"view":{"id":"17613"}},"id":"17612","type":"GlyphRenderer"}],"root_ids":["17646"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"fe75c393-bd38-4443-8b0e-534678fa7d4f","root_ids":["17646"],"roots":{"17646":"6fb77aa0-e999-4179-bc8c-a4d01fba31d0"}}];
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