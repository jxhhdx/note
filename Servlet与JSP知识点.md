<总结>
	jsp和servlet的使用都是通过xml文件来指向的，要实现servlet就要导入
	相应的jar包，再继承Httpservlet重写doGet、doPost方法实现。
<总结>
<Servlet>
	<简介>servlet是javaEE的十三个功能模块之一，是Web服务小程序<简介/>

	<Servlet开发步骤>
		创建Servlet类，继承HttpServlet
		重写service方法，编写代码
		配置web.xml，绑定URL
		<!--@WebServlet-->
	<Servlet开发步骤/>

	<Servlet访问方法>
		http://IP地址:端口/context-path/url-mapping
		context-path默认为工程名
	<Servlet访问方法/>

	<请求方法service(),doGet(),doPost()/>
	

	<!--启动时加载-->
	<load-on-startup>0~9999<load-on-startup>

	<!---->
	<servlet>
  		<servlet-name>requestMethod</servlet-name>
  		<servlet-class>com.imooc.servlet.RequestMethodServlet</servlet-class>
  	</servlet>
  
  	<servlet-mapping>
  		<servlet-name>requestMethod</servlet-name>
  		<url-pattern>/request_method</url-pattern>
  	</servlet-mapping>

<Servlet/>

<jsp>
	<简介>jsp是javaEE的十三个功能模块之一，是服务器页面<简介/>
	
	<jsp语法>
		1.JSP代码块<%System.out.println("Hello World");%>
		2.JSP声明构造块<%!public int add(int a,int b){return a+b}%>
		3.JSP输出指令<%="<b>"+name+"</b>"%>
		4.JSP处理指令<%@page import="java.util.*"%>
		//定义当前jsp页面全局设置
		<%@ page language="java" contentType="text/html; charset=UTF-8"
    		pageEncoding="UTF-8"%>
		//将其他jsp页面与当前jsp页面合并	
		<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
		//引入jsp标签库
		<%@ taglib  uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
		<%--注释--%>
	<jsp语法/>

<jsp/>

	<Servlet请求参数>
		request.getParameter().getParameterValues("name")；获取请求
		
		PrintWriter out = response.getWriter();out.print(html)；输出参数
		response.setConentType("text/gtml;charset=utf-8");//get方法
		request.setCharacterEncoding("UTF-8");//post方法
	<Servlet请求参数/>
	<Cookie>
		Cookie cookie = new Cookie("user","admin");
		response.addCookie(cookie);
		Cookie[] cs=request.getCookies();
		for(Cookie c:cs){ c.getName()+c.getValue()}
	<Cookie/>

	<session>
		获取：
		HttpSession session = request.getSession();
		String sessionId = session.getId();
		System.out.println(sessionId);
		String name = (String)session.getAttribute("name");
		设置：
		HttpSession session = request.getSession();
		String sessionId = session.getId();
		System.out.println(sessionId);
		session.setAttribute("name", "张三");
	<session/>

	<转发与重定向>
		request.getRequestDispatcher("/direct/index").forward(request,response)；请求转发

		response.sendRedirect("/servlet_advanced/direct/index");响应重定向
	<转发与重定向/>

	<设置参数>
		request.setAttribute("username","admin");
		String username=(String)request.getAttribute("username");
	<设置参数/>

	<获取url>
		String url = request.getRequestURL().toString();
		System.out.println(url);
		String id = url.substring(url.lastIndexOf("/") + 1);
		int eid =  Integer.parseInt(id);
	<获取url/>

	<判断客户端>
		request.getHeader("User-Agent").indexOf("iPhone")
	<判断客户端/>
	
	<从xml获取参数>
		ServletContext context = request.getServletContext();
		String copyright = context.getInitParameter("copyright");
		context.setAttribute("copyright", copyright);
		<context-param>
  			<param-name>copyright</param-name>
  			<param-value> 2018 imooc.com  京ICP备 12003892号-22</param-value>
 		 </context-param>
	<从xml获取参数/>