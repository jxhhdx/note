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

