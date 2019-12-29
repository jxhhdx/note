
<json>
	后端中josn格式和字符的转换使用fastjosn（阿里巴巴开发）导入jar包后使用.toJSONstring()转换为json格式，使用.parse()转换回来。
<json>
<JSON>

	<语法>
		{
			"sites":{
				{"name":"百度","url":"www.baidu.com"}		
				{"name":"QQ","url":"www.qq.com"}
			}
		}	
	<语法/>
	<格式转换>
		JSON.parse();字符转JSON
		JSON.stringify();JSON转string
		
		String json = JSON.toJSONString(employee);
		System.out.println(json);
		Employee emp = JSON.parseObject(json, Employee.class);
		System.out.println(emp.getEname());
	<格式转换/>
<JSON/>
<js>
var json = [
		{
			"empno": 7369,
			"ename": "李宁",
			"job": "软件工程师",
			"hiredate": "2017-05-12",
			"salary": 13000,
			"dname": "研发部"
		},
		{
			"empno": 7499,
			"ename": "王乐",
			"job": "客户经理",
			"hiredate": "2017-04-22",
			"salary": 10000,
			"dname": "市场部",
			"customers": [
				{
					"cname": "李东"
				},
				{
					"cname": "刘楠"
				}
			]
		}
	];
	//在浏览器控制台中对json内容进行输出
	console.log(json);
	for(var i = 0 ; i < json.length ; i++){
		var emp = json[i];
		document.write("<h1>");
		document.write(emp.empno);
		document.write("," + emp.ename);
		document.write("," + emp.job);
		document.write("," + emp.hiredate);
		document.write("," + emp.salary);
		document.write("," + emp.dname);
		
		document.write("</h1>");
		if(emp.customers != null){
			document.write("<h2>---")
			for(var j = 0 ; j < emp.customers.length ; j++){
				var customer = emp.customers[j];
				document.write(customer.cname + ",")
			}
			document.write("</h2>")
		}
	}
	<字符转JSON>
		<script type="text/javascript">
		var str = "{\"class_name\":\"五年级四班\"}";//str.ename
		var json = JSON.parse(str);
		console.log(str);
		console.log(json);
		document.write("班级:" + json.class_name);
	</script>
	<字符转JSON/>	
	
	<JSON转字符>
		<script type="text/javascript">
			var json1 = {"class_name" : "五年级四班"};
			var str1 = JSON.stringify(json1);
			console.info(json1);
			console.info(str1);
			var json2 = {};
			json2.class_name = "五年级五班";
			json2.floor = "逸夫楼四层";
			json2.teacher = "王义夫";
			console.info(json2);
		</script>

	<JSON转字符/>
<js/>
