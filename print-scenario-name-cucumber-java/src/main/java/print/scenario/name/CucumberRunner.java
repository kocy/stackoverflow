package print.scenario.name;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
    (
        features   = "src/test/resources/features",
        glue       = "print.scenario.name",
        monochrome = true
    )
public class CucumberRunner {

}
