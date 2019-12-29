<JSTL>
	<标签库分类>
		核心标签库core
		格式化输出表情库fmt
		sql
		xml
		functions
	<标签库分类/>
	<核心标签库>
		<%@ taglib  uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
		单分支：<c:if>。多分支：<c;choose>、<c:when>、<c:otherwise>。遍历：<c:forEach>
		<h1>${requestScope.score}</h1>
		<c:if test = "${score >= 60 }">
			<h1 style = "color:green">恭喜，你已通过测试</h1>
		</c:if>
		<c:if test = "${score < 60 }">
			<h1 style = "color:red">对不起，再接再厉</h1>
		</c:if>
	
		${grade }
		<c:choose>
			<c:when test="${grade == 'A'}">
				<h2>你很优秀</h2>
			</c:when>
			<c:when test="${grade == 'B' }">
				<h2>不错呦</h2>
			</c:when>
			<c:when test="${grade == 'C' }">
				<h2>水平一般，需要提高</h2>
			</c:when>
			<c:when test = "${grade == 'D'}">
				<h2>需要努力啦，不要气馁</h2>
			</c:when>
			<c:otherwise>
				<h2>一切随缘吧</h2>
			</c:otherwise>
		</c:choose>
	
		<c:forEach varStatus="idx" items = "${requestScope.companys }" var = "c">
			<h2>${idx.index + 1}-${c.cname }-${c.url }</h2>
		</c:forEach>
	<核心标签库/>
	<格式化标签库>
		格式化日期标签库：<fmt:formatDate value="" pattern="">
		格式化数字标签库：<fmt:formatNumber value="" pattern="">
		<h2>
			<fmt:formatDate value="${requestScope.now }" pattern="yyyy年MM月dd日 HH时mm分ss秒 SSS毫秒" />
		</h2>
		
		<h2>${amt }</h2>
		<h2><fmt:formatNumber value = "${amt }" pattern="0,00.00"></fmt:formatNumber>元</h2>
		<h2>null默认值：<c:out value="${nothing }" default="无"></c:out> </h2>
		<h2><c:out value="${ html}" escapeXml="true"></c:out></h2>
	<格式化标签库/>
<JSTL/>

<EL>
	${表达式}
	<作用域>
		pageScope
		requestScope
		sessionScope
		applicationScope
	<作用域/>
	<参数的输出>
		${param.参数名}
	<参数的输出/>
<EL/>