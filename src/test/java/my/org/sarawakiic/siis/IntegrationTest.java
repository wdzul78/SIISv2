package my.org.sarawakiic.siis;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import my.org.sarawakiic.siis.config.AsyncSyncConfiguration;
import my.org.sarawakiic.siis.config.EmbeddedSQL;
import my.org.sarawakiic.siis.config.JacksonConfiguration;
import my.org.sarawakiic.siis.config.TestSecurityConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { SiisApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class })
@EmbeddedSQL
public @interface IntegrationTest {
}
