<JSTL>
	<��ǩ�����>
		���ı�ǩ��core
		��ʽ����������fmt
		sql
		xml
		functions
	<��ǩ�����/>
	<���ı�ǩ��>
		<%@ taglib  uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
		����֧��<c:if>�����֧��<c;choose>��<c:when>��<c:otherwise>��������<c:forEach>
		<h1>${requestScope.score}</h1>
		<c:if test = "${score >= 60 }">
			<h1 style = "color:green">��ϲ������ͨ������</h1>
		</c:if>
		<c:if test = "${score < 60 }">
			<h1 style = "color:red">�Բ����ٽ�����</h1>
		</c:if>
	
		${grade }
		<c:choose>
			<c:when test="${grade == 'A'}">
				<h2>�������</h2>
			</c:when>
			<c:when test="${grade == 'B' }">
				<h2>������</h2>
			</c:when>
			<c:when test="${grade == 'C' }">
				<h2>ˮƽһ�㣬��Ҫ���</h2>
			</c:when>
			<c:when test = "${grade == 'D'}">
				<h2>��ҪŬ��������Ҫ����</h2>
			</c:when>
			<c:otherwise>
				<h2>һ����Ե��</h2>
			</c:otherwise>
		</c:choose>
	
		<c:forEach varStatus="idx" items = "${requestScope.companys }" var = "c">
			<h2>${idx.index + 1}-${c.cname }-${c.url }</h2>
		</c:forEach>
	<���ı�ǩ��/>
	<��ʽ����ǩ��>
		��ʽ�����ڱ�ǩ�⣺<fmt:formatDate value="" pattern="">
		��ʽ�����ֱ�ǩ�⣺<fmt:formatNumber value="" pattern="">
		<h2>
			<fmt:formatDate value="${requestScope.now }" pattern="yyyy��MM��dd�� HHʱmm��ss�� SSS����" />
		</h2>
		
		<h2>${amt }</h2>
		<h2><fmt:formatNumber value = "${amt }" pattern="0,00.00"></fmt:formatNumber>Ԫ</h2>
		<h2>nullĬ��ֵ��<c:out value="${nothing }" default="��"></c:out> </h2>
		<h2><c:out value="${ html}" escapeXml="true"></c:out></h2>
	<��ʽ����ǩ��/>
<JSTL/>

<EL>
	${���ʽ}
	<������>
		pageScope
		requestScope
		sessionScope
		applicationScope
	<������/>
	<���������>
		${param.������}
	<���������/>
<EL/>