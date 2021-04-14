const {ccclass, property} = cc._decorator;

@ccclass
export default class SliderListener extends cc.Component {

    private slider:cc.Slider;
    private sliderEventHandler:cc.Component.EventHandler;
    private sliderEventAction:(slider:cc.Slider,data:any)=>void;

    public SetSliderValueChangeCallback(callback:(slider:cc.Slider,data:any)=>void)
    {
        this.sliderEventAction = callback;
    }

    onLoad() 
    {
        this.sliderEventHandler = new cc.Component.EventHandler();
        this.sliderEventHandler.target = this.node;
        this.sliderEventHandler.component = "SliderListener";
        this.sliderEventHandler.handler = "OnValueCallback";
        
        this.slider = this.node.getComponent(cc.Slider);
        this.slider.slideEvents.push(this.sliderEventHandler);
    }

    OnValueCallback(slider:cc.Slider, customEventData:string) 
    {
        this.sliderEventAction(slider,customEventData);
    }
}
