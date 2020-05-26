## SpringBoot初始化

+ 暂无

## Mybatis三剑客

+ 

### 注解使用mybatis

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

