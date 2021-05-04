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
    
      
      
    
      var element = document.getElementById("73871157-45a3-4fbc-a7e4-61d9464443d1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '73871157-45a3-4fbc-a7e4-61d9464443d1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ddafc9b0-8a39-45e5-a2b6-013da3c5506a":{"defs":[],"roots":{"references":[{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40810","type":"Span"},{"attributes":{"overlay":{"id":"40755"}},"id":"40750","type":"LassoSelectTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40816","type":"Span"},{"attributes":{"data_source":{"id":"40811"},"glyph":{"id":"40812"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40813"},"view":{"id":"40815"}},"id":"40814","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"40753","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40853"},"selection_policy":{"id":"40852"}},"id":"40811","type":"ColumnDataSource"},{"attributes":{},"id":"40752","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40813","type":"VBar"},{"attributes":{},"id":"40751","type":"UndoTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40801","type":"VBar"},{"attributes":{"source":{"id":"40811"}},"id":"40815","type":"CDSView"},{"attributes":{"data_source":{"id":"40793"},"glyph":{"id":"40794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40795"},"view":{"id":"40797"}},"id":"40796","type":"GlyphRenderer"},{"attributes":{},"id":"40853","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"40817","type":"FixedTicker"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40784","type":"VBar"},{"attributes":{"toolbars":[{"id":"40722"},{"id":"40756"}],"tools":[{"id":"40712"},{"id":"40713"},{"id":"40714"},{"id":"40715"},{"id":"40716"},{"id":"40717"},{"id":"40718"},{"id":"40719"},{"id":"40746"},{"id":"40747"},{"id":"40748"},{"id":"40749"},{"id":"40750"},{"id":"40751"},{"id":"40752"},{"id":"40753"}]},"id":"40856","type":"ProxyToolbar"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40798","type":"Span"},{"attributes":{"source":{"id":"40793"}},"id":"40797","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40847"},"selection_policy":{"id":"40846"}},"id":"40793","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"40856"},"toolbar_location":"above"},"id":"40857","type":"ToolbarBox"},{"attributes":{"source":{"id":"40799"}},"id":"40803","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40795","type":"VBar"},{"attributes":{"data_source":{"id":"40783"},"glyph":{"id":"40784"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40785"},"view":{"id":"40787"}},"id":"40786","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40805"},"glyph":{"id":"40806"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40807"},"view":{"id":"40809"}},"id":"40808","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40794","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40812","type":"VBar"},{"attributes":{},"id":"40830","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40804","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40800","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40836"},"selection_policy":{"id":"40835"}},"id":"40783","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40720"}},"id":"40714","type":"BoxZoomTool"},{"attributes":{},"id":"40829","type":"UnionRenderers"},{"attributes":{},"id":"40700","type":"LinearScale"},{"attributes":{"source":{"id":"40805"}},"id":"40809","type":"CDSView"},{"attributes":{"overlay":{"id":"40721"}},"id":"40716","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40720","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40754","type":"BoxAnnotation"},{"attributes":{},"id":"40746","type":"ResetTool"},{"attributes":{"children":[[{"id":"40695"},0,0],[{"id":"40731"},0,1]]},"id":"40855","type":"GridBox"},{"attributes":{},"id":"40847","type":"Selection"},{"attributes":{},"id":"40702","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40851"},"selection_policy":{"id":"40850"}},"id":"40805","type":"ColumnDataSource"},{"attributes":{},"id":"40846","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40806","type":"VBar"},{"attributes":{},"id":"40734","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40807","type":"VBar"},{"attributes":{},"id":"40831","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"40719","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40849"},"selection_policy":{"id":"40848"}},"id":"40799","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40755","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"40857"},{"id":"40855"}]},"id":"40858","type":"Column"},{"attributes":{},"id":"40832","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40830"},"selection_policy":{"id":"40829"}},"id":"40765","type":"ColumnDataSource"},{"attributes":{},"id":"40822","type":"AllLabels"},{"attributes":{"data_source":{"id":"40799"},"glyph":{"id":"40800"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40801"},"view":{"id":"40803"}},"id":"40802","type":"GlyphRenderer"},{"attributes":{},"id":"40848","type":"UnionRenderers"},{"attributes":{},"id":"40823","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"40704"}],"center":[{"id":"40707"},{"id":"40711"},{"id":"40770"},{"id":"40776"},{"id":"40782"},{"id":"40788"}],"height":331,"left":[{"id":"40708"}],"output_backend":"webgl","renderers":[{"id":"40768"},{"id":"40774"},{"id":"40780"},{"id":"40786"}],"title":{"id":"40791"},"toolbar":{"id":"40722"},"toolbar_location":null,"width":496,"x_range":{"id":"40696"},"x_scale":{"id":"40700"},"y_range":{"id":"40698"},"y_scale":{"id":"40702"}},"id":"40695","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40849","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40721","type":"PolyAnnotation"},{"attributes":{},"id":"40824","type":"AllLabels"},{"attributes":{"axis":{"id":"40708"},"dimension":1,"ticker":null},"id":"40711","type":"Grid"},{"attributes":{"overlay":{"id":"40754"}},"id":"40748","type":"BoxZoomTool"},{"attributes":{},"id":"40833","type":"UnionRenderers"},{"attributes":{"axis":{"id":"40738"},"ticker":null},"id":"40741","type":"Grid"},{"attributes":{},"id":"40825","type":"BasicTickFormatter"},{"attributes":{},"id":"40839","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"40746"},{"id":"40747"},{"id":"40748"},{"id":"40749"},{"id":"40750"},{"id":"40751"},{"id":"40752"},{"id":"40753"}]},"id":"40756","type":"Toolbar"},{"attributes":{"axis":{"id":"40704"},"ticker":null},"id":"40707","type":"Grid"},{"attributes":{},"id":"40834","type":"Selection"},{"attributes":{},"id":"40747","type":"PanTool"},{"attributes":{},"id":"40840","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40770","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40825"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40824"},"ticker":{"id":"40705"}},"id":"40704","type":"LinearAxis"},{"attributes":{"source":{"id":"40771"}},"id":"40775","type":"CDSView"},{"attributes":{},"id":"40696","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40767","type":"VBar"},{"attributes":{},"id":"40841","type":"AllLabels"},{"attributes":{},"id":"40850","type":"UnionRenderers"},{"attributes":{"source":{"id":"40765"}},"id":"40769","type":"CDSView"},{"attributes":{},"id":"40713","type":"PanTool"},{"attributes":{},"id":"40851","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40773","type":"VBar"},{"attributes":{"text":"tau"},"id":"40791","type":"Title"},{"attributes":{},"id":"40842","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"40765"},"glyph":{"id":"40766"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40767"},"view":{"id":"40769"}},"id":"40768","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"40712"},{"id":"40713"},{"id":"40714"},{"id":"40715"},{"id":"40716"},{"id":"40717"},{"id":"40718"},{"id":"40719"}]},"id":"40722","type":"Toolbar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40823"},"major_label_policy":{"id":"40822"},"ticker":{"id":"40789"}},"id":"40708","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40772","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40832"},"selection_policy":{"id":"40831"}},"id":"40771","type":"ColumnDataSource"},{"attributes":{},"id":"40835","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40776","type":"Span"},{"attributes":{"data_source":{"id":"40771"},"glyph":{"id":"40772"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40773"},"view":{"id":"40775"}},"id":"40774","type":"GlyphRenderer"},{"attributes":{},"id":"40736","type":"LinearScale"},{"attributes":{"data_source":{"id":"40777"},"glyph":{"id":"40778"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40779"},"view":{"id":"40781"}},"id":"40780","type":"GlyphRenderer"},{"attributes":{},"id":"40718","type":"SaveTool"},{"attributes":{},"id":"40749","type":"WheelZoomTool"},{"attributes":{},"id":"40836","type":"Selection"},{"attributes":{},"id":"40712","type":"ResetTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40840"},"major_label_policy":{"id":"40839"},"ticker":{"id":"40817"}},"id":"40742","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40785","type":"VBar"},{"attributes":{},"id":"40715","type":"WheelZoomTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40842"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40841"},"ticker":{"id":"40739"}},"id":"40738","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40782","type":"Span"},{"attributes":{},"id":"40739","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40778","type":"VBar"},{"attributes":{"source":{"id":"40777"}},"id":"40781","type":"CDSView"},{"attributes":{},"id":"40717","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40834"},"selection_policy":{"id":"40833"}},"id":"40777","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"40789","type":"FixedTicker"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40779","type":"VBar"},{"attributes":{},"id":"40698","type":"DataRange1d"},{"attributes":{},"id":"40852","type":"UnionRenderers"},{"attributes":{"axis":{"id":"40742"},"dimension":1,"ticker":null},"id":"40745","type":"Grid"},{"attributes":{"source":{"id":"40783"}},"id":"40787","type":"CDSView"},{"attributes":{"text":"mu"},"id":"40819","type":"Title"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40788","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40766","type":"VBar"},{"attributes":{},"id":"40705","type":"BasicTicker"},{"attributes":{"below":[{"id":"40738"}],"center":[{"id":"40741"},{"id":"40745"},{"id":"40798"},{"id":"40804"},{"id":"40810"},{"id":"40816"}],"height":331,"left":[{"id":"40742"}],"output_backend":"webgl","renderers":[{"id":"40796"},{"id":"40802"},{"id":"40808"},{"id":"40814"}],"title":{"id":"40819"},"toolbar":{"id":"40756"},"toolbar_location":null,"width":496,"x_range":{"id":"40696"},"x_scale":{"id":"40734"},"y_range":{"id":"40698"},"y_scale":{"id":"40736"}},"id":"40731","subtype":"Figure","type":"Plot"}],"root_ids":["40858"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"ddafc9b0-8a39-45e5-a2b6-013da3c5506a","root_ids":["40858"],"roots":{"40858":"73871157-45a3-4fbc-a7e4-61d9464443d1"}}];
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