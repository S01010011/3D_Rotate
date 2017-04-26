(function(){

	function Transform(){
		this.$hoverBoxs = $('.wrap>div');
		this.$rotateBoxs = $('.rotateBox');
		this.$front = $('.front');
		this.$back = $('.back');
		this.boxW = $('.ps').outerWidth();
		this.axisZ = Math.ceil(this.boxW/2);

		this.reSet();
	}
	Transform.prototype.reSet = function(){
		var self = this;
		this.$hoverBoxs.each(function(index,elem){
			// console.log(self.$rotateBoxs.eq(index))
			self.mouseout(self.$rotateBoxs.eq(index));	//静态设置
			$(elem).hover(function(){
				self.mouseover(self.$rotateBoxs.eq(index));
			},function(){
				self.mouseout(self.$rotateBoxs.eq(index));
			});
		});
		this.setFront();
		this.setBack();
	}
	Transform.prototype.reGet = function(){
		this.boxW = $('.ps').outerWidth();
		if(this.boxW > 150) {
			this.axisZ = Math.ceil(this.boxW/2);
			this.reSet();
		}
		else {
			this.axisZ = 75;
			this.reSet();
		}
	}
	Transform.prototype.mouseover = function(obj){
		obj.css('transform','translateZ(-'+this.axisZ+'px) rotateY(-90deg)');
	}
	Transform.prototype.mouseout = function(obj){
		obj.css('transform','translateZ(-'+this.axisZ+'px)');
	}
	Transform.prototype.setFront = function(){
		this.$front.css('transform','translateZ('+(this.axisZ)+'px)');
	}
	Transform.prototype.setBack = function(){
		this.$back.css('transform','rotateY(90deg) translateZ('+(this.axisZ-2)+'px)');
	}

	var tf = new Transform;
	$(window).resize();

	$(window).resize(function(){
		var bodyW = Number($('body').css('width').slice(0,-2));
		if(bodyW>1210){
			$('body').css('overflow','hidden');
		}
		else{
			$('body').css('overflow','scroll');
		}
		tf.reGet();
	});


})();