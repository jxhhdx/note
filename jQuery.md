<jQuery>
	<简介>
		为了简化javascript开发，第三方开发的js库，jQuery是经常那使用的一个。
		它的核心是选择器，用于获取页面元素。
	<简介/>
	<基本选择器>
		$("#id")                     ID选择器
		$("标签"）                   元素选择器
		$(".class")                  类选择器
		$("S1,S2,SN")                组合选择器
	<基本选择器/>
	<层叠选择器> 
		$("ancestor descendant")     后代选择器
		$("ancestor>descendant")     子选择器
		$("prev~siblings")           兄弟选择器
	<层叠选择器/>
	<属性选择器>
		$("select[attribute=value]") 选中属性值等于具体值的组件
		$("select[attribute^=value]")选中属性值以某值开头的主键
		$("select[attribute$=value]")选中属性值以某值结尾的组件
		$("select[attribute*=value]")选中属性值包含某值的组件
	<属性选择器/>
	<位置选择器>
		$("selector:first")          获取第一个元素
		$("selector:last")           获取最后一个元素
		$("selector:even")           获取偶位置的元素（从0开始）
		$("selector:odd")            获取奇位置的元素（从0开始）
		$("selector:eq(n)")          获取指定位置的元素（从0开始）
	<位置选择器/>
	<表单选择器>
		$("selector:input")          所有输入元素
		$("selector:text")           获取文本框
		$("selector:password")       获取密码框
		$("selector:submit")         获取提交按钮
		$("selector:reset")          获取提交按钮
	<表单选择器/>
	<操作元素属性>
		attr(name|properties|key)    获取或设置元素属性
		removeAttr(name)             移除元素属性
	<操作元素属性/>
	<操作元素的CSS样式>
		css()                        获取或设置匹配元素的样式属性
		addClass()                   为匹配的元素添加指定的类名
		removeClass()                从所有匹配的元素中删除全部或者指定的类
	<操作元素的CSS样式/>
	<设置元素内容>
		val()                        获取或设置输入项的值
		text()                       获取或设置元素的纯文本
		html()	                     获取或设置元素内部的HTML
	<设置元素内容/>
	
	<jQuery事件>
		on("click","function")       为选中的页面元素绑定单击事件
		click(function)              是绑定事件的简写形式
		<事件> 
			鼠标事件：click，dblclick，mouseenter，mouseleave
			键盘事件：keypress，keydown，keyup
			表单事件：submit，change，focus，blur
			文档/窗口事件：load，resize，scroll，unload
		<事件/>
	<jQuery事件/>
	
	<页面就绪函数>
		$(document).ready(function)
		$(function)
	<页面就绪函数/>
<jQuery/>

<Ajax>
	<Ajax使用流程>
		创建XmlHttpRequest对象
		发送Ajax请求
		处理服务器响应
	    <创建XMLHttpRequest对象>
		var xmlhttp;
		if(window.XMLHttpRequest){
			//IE7,firefox,chrome,opera,safari,浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	    <创建XMlHttRequest对象/>
	    <发送Ajax请求>
		//创建请求
		xmlhttp.open("GET","http://localhost/test?name=admin",true);
		//发送到服务器
		xmlhttp.send();
	    <发送Ajax请求/>
	    <处理服务器响应>
		xmlhttp.opreadystatechange=function(){
		   //响应已被接收且服务器处理成功时才执行
		   if(xmlhttp.requestState==4&&xmlhttp.status==200){
		       	//获取响应体的文本
			var responseText=xmlhttp。responseText;
			//对服务器结果进行处理
                        ...
		   }
		}
	    <处理服务器响应/>

	<Ajax使用流程/>
	<jQuery>url发送请求地址；type请求类型（post|post）；data向服务器传递的参数
success接收响应时的处理函数；error请求失败时的处理函数
	<jQuery/>
	<ajax衍生的简化方法>
		$.get()发送Get方式ajax请求
		$.post()发送Post方式ajax请求
		$.ajaxSetup()设置Ajax全局默认值
	<ajax衍生的简化方法/>
	
<Ajax/>