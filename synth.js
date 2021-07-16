
/*
Code generated with Faust version 2.30.12
Compilation options: -lang wasm-eb -es 1 -scal -ftz 2
*/

function getJSONsynth() {
	return '{"name": "synth","filename": "synth.dsp","version": "2.30.12","compile_options": "-lang wasm-eb -es 1 -scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/oscillators.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/platform.lib","/usr/local/share/faust/vaeffects.lib","/usr/local/share/faust/envelopes.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/filters.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/Users/home/Documents/webfaust/synth"],"size": 16632,"inputs": 0,"outputs": 2,"meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.1" },{ "compile_options": "-lang wasm-eb -es 1 -scal -ftz 2" },{ "envelopes.lib/author": "GRAME" },{ "envelopes.lib/copyright": "GRAME" },{ "envelopes.lib/license": "LGPL with exception" },{ "envelopes.lib/name": "Faust Envelope Library" },{ "envelopes.lib/version": "0.1" },{ "filename": "synth.dsp" },{ "filters.lib/lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/pole:author": "Julius O. Smith III" },{ "filters.lib/pole:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/pole:license": "MIT-style STK-4.3 license" },{ "filters.lib/version": "0.3" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.3" },{ "name": "synth" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.1" },{ "platform.lib/name": "Generic Platform Library" },{ "platform.lib/version": "0.1" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.0" },{ "vaeffects.lib/moog_vcf:author": "Julius O. Smith III" },{ "vaeffects.lib/moog_vcf:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "vaeffects.lib/moog_vcf:license": "MIT-style STK-4.3 license" },{ "vaeffects.lib/name": "Faust Virtual Analog Filter Effect Library" },{ "vaeffects.lib/version": "0.0" }],"ui": [ {"type": "vgroup","label": "synth","items": [ {"type": "hslider","label": "attack","address": "/synth/attack","index": 48,"meta": [{ "midi": "ctrl 73" }],"init": 0.1,"min": 0.1,"max": 400,"step": 0.001},{"type": "hslider","label": "bend","address": "/synth/bend","index": 112,"meta": [{ "midi": "pitchwheel" }],"init": 1,"min": 0.001,"max": 10,"step": 0.01},{"type": "hslider","label": "decay","address": "/synth/decay","index": 52,"meta": [{ "midi": "ctrl 76" }],"init": 60,"min": 0.1,"max": 400,"step": 0.001},{"type": "hslider","label": "envMod","address": "/synth/envMod","index": 148,"meta": [{ "BELA": "ANALOG_3" }],"init": 50,"min": 0,"max": 100,"step": 0.01},{"type": "hslider","label": "fc","address": "/synth/fc","index": 92,"meta": [{ "BELA": "ANALOG_1" }],"init": 15,"min": 15,"max": 12000,"step": 0.001},{"type": "nentry","label": "freq","address": "/synth/freq","index": 108,"meta": [{ "unit": "Hz" }],"init": 440,"min": 20,"max": 20000,"step": 1},{"type": "nentry","label": "gain","address": "/synth/gain","index": 0,"init": 0.5,"min": 0,"max": 0.5,"step": 0.01},{"type": "button","label": "gate","address": "/synth/gate","index": 12},{"type": "hslider","label": "lfoFreq","address": "/synth/lfoFreq","index": 128,"meta": [{ "midi": "ctrl 78" }],"init": 6,"min": 0.001,"max": 10,"step": 0.001},{"type": "hslider","label": "modwheel","address": "/synth/modwheel","index": 116,"meta": [{ "midi": "ctrl 1" }],"init": 0,"min": 0,"max": 0.5,"step": 0.001},{"type": "hslider","label": "release","address": "/synth/release","index": 24,"meta": [{ "midi": "ctrl 72" }],"init": 100,"min": 0.1,"max": 400,"step": 0.001},{"type": "hslider","label": "resonnance","address": "/synth/resonnance","index": 72,"meta": [{ "BELA": "ANALOG_2" }],"init": 0.5,"min": 0,"max": 1,"step": 0.001},{"type": "hslider","label": "sustain","address": "/synth/sustain","index": 60,"meta": [{ "midi": "ctrl 77" }],"init": 0.2,"min": 0,"max": 1,"step": 0.001},{"type": "hslider","label": "tracking","address": "/synth/tracking","index": 104,"meta": [{ "midi": "ctrl 79" }],"init": 1,"min": 0,"max": 2,"step": 0.001},{"type": "hslider","label": "waveform","address": "/synth/waveform","index": 160,"meta": [{ "BELA": "ANALOG_0" }],"init": 0.5,"min": 0,"max": 1,"step": 0.001}]}]}';
}
function getBase64Codesynth() { return "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AgAgAEHwAGpDAACAPzgCACAAQfQAakMAAAAAOAIAIABBgAFqQwAAwEA4AgAgAEGUAWpDAABIQjgCACAAQaABakMAAAA/OAIAC5CAgIAAACAAIAFIBH8gAQUgAAsPC5CAgIAAACAAIAFIBH8gAAUgAQsPC4yAgIAAACAAIAFqIAI4AgALC8ajgIAAAQBBAAu/I3sibmFtZSI6ICJzeW50aCIsImZpbGVuYW1lIjogInN5bnRoLmRzcCIsInZlcnNpb24iOiAiMi4zMC4xMiIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWViIC1lcyAxIC1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcGxhdGZvcm0ubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC92YWVmZmVjdHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9lbnZlbG9wZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9iYXNpY3MubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9maWx0ZXJzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi9Vc2Vycy9ob21lL0RvY3VtZW50cy93ZWJmYXVzdC9zeW50aCJdLCJzaXplIjogMTY2MzIsImlucHV0cyI6IDAsIm91dHB1dHMiOiAyLCJtZXRhIjogWyB7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20tZWIgLWVzIDEgLXNjYWwgLWZ0eiAyIiB9LHsgImVudmVsb3Blcy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgImVudmVsb3Blcy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgImVudmVsb3Blcy5saWIvbmFtZSI6ICJGYXVzdCBFbnZlbG9wZSBMaWJyYXJ5IiB9LHsgImVudmVsb3Blcy5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAiZmlsZW5hbWUiOiAic3ludGguZHNwIiB9LHsgImZpbHRlcnMubGliL2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJmaWx0ZXJzLmxpYi9wb2xlOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL3BvbGU6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL3BvbGU6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL3ZlcnNpb24iOiAiMC4zIiB9LHsgIm1hdGhzLmxpYi9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzLmxpYi9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRocy5saWIvdmVyc2lvbiI6ICIyLjMiIH0seyAibmFtZSI6ICJzeW50aCIgfSx7ICJvc2NpbGxhdG9ycy5saWIvbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgInBsYXRmb3JtLmxpYi9uYW1lIjogIkdlbmVyaWMgUGxhdGZvcm0gTGlicmFyeSIgfSx7ICJwbGF0Zm9ybS5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAic2lnbmFscy5saWIvbmFtZSI6ICJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5IiB9LHsgInNpZ25hbHMubGliL3ZlcnNpb24iOiAiMC4wIiB9LHsgInZhZWZmZWN0cy5saWIvbW9vZ192Y2Y6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAidmFlZmZlY3RzLmxpYi9tb29nX3ZjZjpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAidmFlZmZlY3RzLmxpYi9tb29nX3ZjZjpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAidmFlZmZlY3RzLmxpYi9uYW1lIjogIkZhdXN0IFZpcnR1YWwgQW5hbG9nIEZpbHRlciBFZmZlY3QgTGlicmFyeSIgfSx7ICJ2YWVmZmVjdHMubGliL3ZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJzeW50aCIsIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImF0dGFjayIsImFkZHJlc3MiOiAiL3N5bnRoL2F0dGFjayIsImluZGV4IjogNDgsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDczIiB9XSwiaW5pdCI6IDAuMSwibWluIjogMC4xLCJtYXgiOiA0MDAsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJiZW5kIiwiYWRkcmVzcyI6ICIvc3ludGgvYmVuZCIsImluZGV4IjogMTEyLCJtZXRhIjogW3sgIm1pZGkiOiAicGl0Y2h3aGVlbCIgfV0sImluaXQiOiAxLCJtaW4iOiAwLjAwMSwibWF4IjogMTAsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImRlY2F5IiwiYWRkcmVzcyI6ICIvc3ludGgvZGVjYXkiLCJpbmRleCI6IDUyLCJtZXRhIjogW3sgIm1pZGkiOiAiY3RybCA3NiIgfV0sImluaXQiOiA2MCwibWluIjogMC4xLCJtYXgiOiA0MDAsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJlbnZNb2QiLCJhZGRyZXNzIjogIi9zeW50aC9lbnZNb2QiLCJpbmRleCI6IDE0OCwibWV0YSI6IFt7ICJCRUxBIjogIkFOQUxPR18zIiB9XSwiaW5pdCI6IDUwLCJtaW4iOiAwLCJtYXgiOiAxMDAsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImZjIiwiYWRkcmVzcyI6ICIvc3ludGgvZmMiLCJpbmRleCI6IDkyLCJtZXRhIjogW3sgIkJFTEEiOiAiQU5BTE9HXzEiIH1dLCJpbml0IjogMTUsIm1pbiI6IDE1LCJtYXgiOiAxMjAwMCwic3RlcCI6IDAuMDAxfSx7InR5cGUiOiAibmVudHJ5IiwibGFiZWwiOiAiZnJlcSIsImFkZHJlc3MiOiAiL3N5bnRoL2ZyZXEiLCJpbmRleCI6IDEwOCwibWV0YSI6IFt7ICJ1bml0IjogIkh6IiB9XSwiaW5pdCI6IDQ0MCwibWluIjogMjAsIm1heCI6IDIwMDAwLCJzdGVwIjogMX0seyJ0eXBlIjogIm5lbnRyeSIsImxhYmVsIjogImdhaW4iLCJhZGRyZXNzIjogIi9zeW50aC9nYWluIiwiaW5kZXgiOiAwLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAwLjUsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiYnV0dG9uIiwibGFiZWwiOiAiZ2F0ZSIsImFkZHJlc3MiOiAiL3N5bnRoL2dhdGUiLCJpbmRleCI6IDEyfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImxmb0ZyZXEiLCJhZGRyZXNzIjogIi9zeW50aC9sZm9GcmVxIiwiaW5kZXgiOiAxMjgsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDc4IiB9XSwiaW5pdCI6IDYsIm1pbiI6IDAuMDAxLCJtYXgiOiAxMCwic3RlcCI6IDAuMDAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIm1vZHdoZWVsIiwiYWRkcmVzcyI6ICIvc3ludGgvbW9kd2hlZWwiLCJpbmRleCI6IDExNiwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgMSIgfV0sImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAwLjUsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJyZWxlYXNlIiwiYWRkcmVzcyI6ICIvc3ludGgvcmVsZWFzZSIsImluZGV4IjogMjQsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDcyIiB9XSwiaW5pdCI6IDEwMCwibWluIjogMC4xLCJtYXgiOiA0MDAsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJyZXNvbm5hbmNlIiwiYWRkcmVzcyI6ICIvc3ludGgvcmVzb25uYW5jZSIsImluZGV4IjogNzIsIm1ldGEiOiBbeyAiQkVMQSI6ICJBTkFMT0dfMiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJzdXN0YWluIiwiYWRkcmVzcyI6ICIvc3ludGgvc3VzdGFpbiIsImluZGV4IjogNjAsIm1ldGEiOiBbeyAibWlkaSI6ICJjdHJsIDc3IiB9XSwiaW5pdCI6IDAuMiwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInRyYWNraW5nIiwiYWRkcmVzcyI6ICIvc3ludGgvdHJhY2tpbmciLCJpbmRleCI6IDEwNCwibWV0YSI6IFt7ICJtaWRpIjogImN0cmwgNzkiIH1dLCJpbml0IjogMSwibWluIjogMCwibWF4IjogMiwic3RlcCI6IDAuMDAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIndhdmVmb3JtIiwiYWRkcmVzcyI6ICIvc3ludGgvd2F2ZWZvcm0iLCJpbmRleCI6IDE2MCwibWV0YSI6IFt7ICJCRUxBIjogIkFOQUxPR18wIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDAxfV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class synthPolyNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        var json_object = JSON.parse(getJSONsynth());
      
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'synthPoly', options);
        this.baseURL = baseURL;
      
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);         
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.json_object = json_object;

        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        if (this.effect_json_object) {
            this.parse_ui(this.effect_json_object.ui, this);
        }

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) {}
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API
    
    /**
     * Destroy the node, deallocate resources.
     */
    destroy()
    {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }
	
    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        var res = "";
        res = res.concat("{\"name\":\""); res = res.concat(this.json_object.name); res = res.concat("\",");
        res = res.concat("\"version\":\""); res = res.concat(this.json_object.version); res = res.concat("\",");
        res = res.concat("\"options\":\""); res = res.concat(this.json_object.options); res = res.concat("\",");
        res = res.concat("\"inputs\":\""); res = res.concat(this.json_object.inputs); res = res.concat("\",");
        res = res.concat("\"outputs\":\""); res = res.concat(this.json_object.outputs); res = res.concat("\",");
        res = res.concat("\"meta\":"); res = res.concat(JSON.stringify(this.json_object.meta)); res = res.concat(",");

        if (this.effect_json_object) {
            res = res.concat("\"ui\":[{\"type\":\"tgroup\",\"label\":\"Sequencer\",\"items\":[");
            res = res.concat("{\"type\": \"vgroup\",\"label\":\"Instrument\",\"items\":");
            res = res.concat(JSON.stringify(this.json_object.ui));
            res = res.concat("},");
            res = res.concat("{\"type\":\"vgroup\",\"label\":\"Effect\",\"items\":");
            res = res.concat(JSON.stringify(this.effect_json_object.ui));
            res = res.concat("}");
            res = res.concat("]}]}");
            return res;
        } else {
            res = res.concat("\"ui\":[{\"type\":\"tgroup\",\"label\":\"Polyphonic\",\"items\":[");
            res = res.concat("{\"type\": \"vgroup\",\"label\":\"Voices\",\"items\":");
            res = res.concat(JSON.stringify(this.json_object.ui));
            res = res.concat("},");
            res = res.concat("]}]}");
            return res;
        }
    }
    
    // For WAP
    async getMetadata()
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        this.port.postMessage({ type:"param", key:path, value:val });
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        this.port.postMessage({ type:"param", key:path, value:val });
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path)
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount()
    {
        return parseInt(this.json_object.inputs);
    }
    
    outputChannelCount()
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
        
    // For WAP
    getDescriptor()
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Instantiates a new polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOn(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOn", data: [channel, pitch, velocity] });
    }

    /**
     * De-instantiates a polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOff(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOff", data: [channel, pitch, velocity] });
    }

    /**
     * Gently terminates all the active voices.
     */
    allNotesOff()
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, 123, 0] });
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
    	this.port.postMessage({ type:"midi", data:data });
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState()
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }
    
    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state
     */
    async setState(state)
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

}

// Factory class
class synthPoly {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param polyphony - the number of voices
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, polyphony = 16, baseURL = "")
    {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.polyphony = polyphony;
        this.baseURL = baseURL;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
    	return new Promise((resolve, reject) => {   
            let real_url = (this.baseURL === "") ? "synth-processor.js" : (this.baseURL + "/synth-processor.js");
            let options = { polyphony: this.polyphony };
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new synthPolyNode(this.context, this.baseURL, { processorOptions: options });
            this.node.onprocessorerror = () => { console.log('An error from synth-processor was detected.');}
            return (this.node);
            }).then((node) => {
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }

    async loadGui() 
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createsynthGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createsynthGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };
    
    linkExists(url) 
    {
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

const dspName = "synthPoly";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.synthPoly = synthPoly;
    window.FaustsynthPoly = synthPoly;
    window[dspName] = synthPoly;
} else {
    module.exports = { synthPoly };
}
