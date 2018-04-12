package print.scenario.name;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java8.En;

public class TestBeforeHook implements En {

    @Before
    public void printScenarioName(Scenario scenario) {
        System.out.println("## Run into Before Hook: printScenarioName");
        System.out.println("# Scenario name: " + scenario.getName());
        System.out.println("## Run out Before Hook: printScenarioName");
    }
    
    public TestBeforeHook() {

        Then("^I want to print the scenario name$", () -> {
            System.out.println("Run into step 1");
        });
    }

}
