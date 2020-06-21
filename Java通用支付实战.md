## SpringBoot初始化

+ 暂无

## Mybatis三剑客

+ 

### 使用mybatis

```java
@Mapper
public interface CategoryMapper {
    @Select("select * from mall_category where id = #{id}")
    Category findById(@Param("id") Integer id);
}

@RunWith(SpringRunner.class)
@SpringBootTest
public class MallApplicationTests {
    @Autowired
    private CategoryMapper categoryMapper;
    @Test
    public void contextLoads() {
        Category category = categoryMapper.findById(100001);
        System.out.println(category.toString());
    }
}

```

yml文件的配置

```yml
spring:
  datasource:
    url: jdbc:mysql://121.199.70.205:3306/mall?characterEncoding=utf-8&useSSL=false
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: ******
# 使得实体类中parentId对应parent_id
mybatis:
  configuration:
    map-underscore-to-camel-case: true
```

### Mybatis-generator

```shell
mvn mybatis-generator:generate
```



## 支付

### 支付场景

> 微信文档： https://pay.weixin.qq.com/wiki/doc/api/index.html 
>
> 支付宝文档：  https://openhome.alipay.com/docCenter/docCenter.html

#### 微信支付方式及支付宝支付

+ 付款码支付（超市收银员扫描手机上的支付码）

+ JSAPI支付（公众号上面点击之后触发的支付、使用链接就可以支付）  ps：不用关注公众号。
+ Native支付（打开微信扫描二维码支付）
+ App支付（就是App集成微信支付，比如说QQ阅读点击付款之后跳出微信支付
+ H5支付（在微信客户端以外的地方唤醒微信支付，从外部浏览器唤醒微信支付）
+ 小程序支付（在小程序中唤醒的支付）

| 对比栏目           | JSAPI                                                        | JSSDK       | 小程序                          |
| ------------------ | ------------------------------------------------------------ | ----------- | ------------------------------- |
| 统一下单           | 都需要先获取到Openid，调用相同的API                          | 同          | 同                              |
| 调起数据签名       | 五个字段参与签名(区分大小写)：appId,nonceStr,package,signType,timeStamp | 同          | 同                              |
| 调起支付页面协议   | HTTP或HTTPS                                                  | HTTP或HTTPS | HTTPS                           |
| 支付目录（白名单） | 有                                                           | 有          | 无                              |
| 授权域名           | 有                                                           | 有          | 无                              |
| 回调函数           | 有                                                           | success回调 | complete、fail、success回调函数 |

+ 人脸支付

微信和支付宝的对比

| 微信支付方式 | 支付宝支付方式               |
| ------------ | ---------------------------- |
| 付款码支付   |                              |
| JSAPI支付    |                              |
| Native支付   | 扫码支付                     |
| App支付      | App支付                      |
| H5支付       | 手机网站支付（电脑网站支付） |
| 小程序支付   |                              |
| 人脸支付     | 刷脸付                       |

### 同步异步

+ 打电话算是同步（能立即得到回应）

+ 发短信算是异步（不能立刻得到回应）
  + 转账算是异步

### 支付系统

+ 独立的系统
+ 独立的数据库/表

## 支付系统架构

### null

### 微信支付异步通知

### 支付宝密钥

+  应用公私密钥
+ RSA非对称加密
  + 发起支付：支付系统（应用私钥）->支付宝（应用公钥）
  + 异步通知：支付宝（支付宝私钥）->支付系统（支付宝公钥）
+ RSA签名不等于RSA加密
+ 一般加解密使用AES加密

## 小技巧

### 读取yml文件中的配置

+ yml文件中进行如下配置：

```yml
wx:
  appId: wxd898fcb01713c658
  mchId: 1483469312
  mchKey: 098F6BCD4621D373CADE4E832627B4F6
  notifyUrl: http://undefined-gx.natapp1.cc/pay/notify
  returnUrl: http://127.0.0.1
```

+ java文件中配置如下所示，调用这个实体类就可以获取配置



```java
@Component
@ConfigurationProperties(prefix = "wx")
@Data
public class WxAccountConfig {
    private String appId;
    private String mchId;
    private String mchKey;
    private String notifyUrl;
    private String returnUrl;
}
```

## 用户模块设计

### Service注册模块设计与测试



### Controller接收参数

+ String方式

```java
@PostMapping("register")// 有了RequestParam之后参数名字可以随便起
public void register(@RequestParam(value = "username") String username){ 
	log.info("username={}", username);
}
```

+ Obejct方式

```java
@PostMapping("register")
public void register(User user){ //传递的参数必须和Object中的属性相同 
	log.info("username={}", username);
}

@PostMapping("register") //传递数据类型为json时必须加上RequestBody
public void register(@RequestBody User user){ //传递的参数必须和Object中的属性相同 
	log.info("username={}", username);
}
```

### 表单的验证



### 实战登陆



### Cookie、Session

+ 使用sessionId存入到浏览器的cookie中
+ 升级版是使用token和redis配合

Cookie 跨域

+ 登录状态什么时候消失？

  过期的时候、服务重启、浏览器重启。

 ### 拦截器模块的开发

+ Interceptor----Url

```java
@Slf4j  // 1、实现接口 2、重写默认方法 
public class UserLoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("preHandle...");
        User user = (User) request.getSession().getAttribute(MallConst.CURRENT_USER);
        if (user == null) {
            log.info("user==null");
            throw new UserLoginException();
        }
        return true;
    }
}

@Configuration  // 1、实现接口 2、重写默认方法 3、注解
public class InterceptorConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new UserLoginInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/user/login", "/user/register");
    }
}
```

+ AOP ----包名

### 单元测试

> mvn clean package -Dmaven.test.skip=true