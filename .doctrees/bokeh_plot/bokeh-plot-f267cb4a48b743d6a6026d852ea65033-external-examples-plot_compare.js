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
    
      
      
    
      var element = document.getElementById("359eb5d4-c0c8-4127-8a4c-d5743895510b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '359eb5d4-c0c8-4127-8a4c-d5743895510b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9cf442f0-bbc5-40e3-b1b1-117e3179bba1":{"defs":[],"roots":{"references":[{"attributes":{},"id":"15074","type":"Title"},{"attributes":{"source":{"id":"15047"}},"id":"15051","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15058","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15045","type":"FixedTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15035","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15087"},"selection_policy":{"id":"15086"}},"id":"15057","type":"ColumnDataSource"},{"attributes":{},"id":"15090","type":"UnionRenderers"},{"attributes":{"axis_label":"Log","formatter":{"id":"15078"},"major_label_policy":{"id":"15077"},"ticker":{"id":"15019"}},"id":"15018","type":"LinearAxis"},{"attributes":{},"id":"15086","type":"UnionRenderers"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15063","type":"MultiLine"},{"attributes":{},"id":"15091","type":"Selection"},{"attributes":{"source":{"id":"15052"}},"id":"15056","type":"CDSView"},{"attributes":{},"id":"15014","type":"LinearScale"},{"attributes":{},"id":"15076","type":"BasicTickFormatter"},{"attributes":{},"id":"15019","type":"BasicTicker"},{"attributes":{},"id":"15083","type":"Selection"},{"attributes":{},"id":"15089","type":"Selection"},{"attributes":{"toolbars":[{"id":"15036"}],"tools":[{"id":"15026"},{"id":"15027"},{"id":"15028"},{"id":"15029"},{"id":"15030"},{"id":"15031"},{"id":"15032"},{"id":"15033"}]},"id":"15094","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"15047"},"glyph":{"id":"15048"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15049"},"view":{"id":"15051"}},"id":"15050","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"15018"}],"center":[{"id":"15021"},{"id":"15025"}],"height":500,"left":[{"id":"15022"}],"output_backend":"webgl","renderers":[{"id":"15050"},{"id":"15055"},{"id":"15060"},{"id":"15065"},{"id":"15070"},{"id":"15072"}],"title":{"id":"15074"},"toolbar":{"id":"15036"},"toolbar_location":null,"width":500,"x_range":{"id":"15010"},"x_scale":{"id":"15014"},"y_range":{"id":"15012"},"y_scale":{"id":"15016"}},"id":"15009","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15053","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15064","type":"MultiLine"},{"attributes":{},"id":"15088","type":"UnionRenderers"},{"attributes":{},"id":"15027","type":"PanTool"},{"attributes":{},"id":"15016","type":"LinearScale"},{"attributes":{"children":[[{"id":"15009"},0,0]]},"id":"15093","type":"GridBox"},{"attributes":{"overlay":{"id":"15035"}},"id":"15030","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"15018"},"ticker":null},"id":"15021","type":"Grid"},{"attributes":{"formatter":{"id":"15076"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15075"},"ticker":{"id":"15045"}},"id":"15022","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15068","type":"Circle"},{"attributes":{"toolbar":{"id":"15094"},"toolbar_location":"above"},"id":"15095","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"15033","type":"HoverTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15048","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15034","type":"BoxAnnotation"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15089"},"selection_policy":{"id":"15088"}},"id":"15062","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15049","type":"Scatter"},{"attributes":{},"id":"15077","type":"AllLabels"},{"attributes":{},"id":"15010","type":"DataRange1d"},{"attributes":{},"id":"15084","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15059","type":"Circle"},{"attributes":{},"id":"15078","type":"BasicTickFormatter"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15072","type":"Span"},{"attributes":{"source":{"id":"15062"}},"id":"15066","type":"CDSView"},{"attributes":{},"id":"15087","type":"Selection"},{"attributes":{},"id":"15082","type":"UnionRenderers"},{"attributes":{},"id":"15032","type":"SaveTool"},{"attributes":{"data_source":{"id":"15052"},"glyph":{"id":"15053"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15054"},"view":{"id":"15056"}},"id":"15055","type":"GlyphRenderer"},{"attributes":{},"id":"15031","type":"UndoTool"},{"attributes":{"overlay":{"id":"15034"}},"id":"15028","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"15095"},{"id":"15093"}]},"id":"15096","type":"Column"},{"attributes":{"data_source":{"id":"15057"},"glyph":{"id":"15058"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15059"},"view":{"id":"15061"}},"id":"15060","type":"GlyphRenderer"},{"attributes":{"end":0.5,"start":-1.5},"id":"15012","type":"DataRange1d"},{"attributes":{},"id":"15026","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15054","type":"MultiLine"},{"attributes":{"axis":{"id":"15022"},"dimension":1,"ticker":null},"id":"15025","type":"Grid"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15085"},"selection_policy":{"id":"15084"}},"id":"15052","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15062"},"glyph":{"id":"15063"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15064"},"view":{"id":"15066"}},"id":"15065","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"15026"},{"id":"15027"},{"id":"15028"},{"id":"15029"},{"id":"15030"},{"id":"15031"},{"id":"15032"},{"id":"15033"}]},"id":"15036","type":"Toolbar"},{"attributes":{"data_source":{"id":"15067"},"glyph":{"id":"15068"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15069"},"view":{"id":"15071"}},"id":"15070","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15067"}},"id":"15071","type":"CDSView"},{"attributes":{},"id":"15029","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15069","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15083"},"selection_policy":{"id":"15082"}},"id":"15047","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15091"},"selection_policy":{"id":"15090"}},"id":"15067","type":"ColumnDataSource"},{"attributes":{},"id":"15075","type":"AllLabels"},{"attributes":{"source":{"id":"15057"}},"id":"15061","type":"CDSView"},{"attributes":{},"id":"15085","type":"Selection"}],"root_ids":["15096"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"9cf442f0-bbc5-40e3-b1b1-117e3179bba1","root_ids":["15096"],"roots":{"15096":"359eb5d4-c0c8-4127-8a4c-d5743895510b"}}];
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