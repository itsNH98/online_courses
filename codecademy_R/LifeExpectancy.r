---
title: "Life Expectancy By Country"
output: html_notebook
---

```{r message=FALSE, warning=FALSE, error=TRUE}
# load packages
library(ggplot2)
library(readr)
library(dplyr)
```

```{r error=TRUE}
# import and inspect data
data <- read_csv("country_data.csv")
head(data)
```

```{r error=TRUE}
# life expectancy
life_expectancy <- data %>%
  pull(life_expectancy)


# life expectancy quartiles
life_expectancy_quartiles = quantile(life_expectancy, c(0.25,0.5,0.75))
print(life_expectancy_quartiles)
```

```{r error=TRUE}
# plot histogram of life expectancy
hist(life_expectancy)
```

```{r error=TRUE}
# gdp
gdp <- data %>%
  pull(GDP)


# median gdp
median_gdp = median(gdp)

```

```{r error=TRUE}
# low gdp
low_gdp <- data %>%
  filter(GDP <= median_gdp)
low_gdp <- data %>%
  filter(GDP <= median_gdp) %>%
  pull(life_expectancy)


# high gdp
high_gdp <- data %>%
  filter(GDP > median_gdp)
high_gdp <- data %>%
  filter(GDP > median_gdp) %>%
  pull(life_expectancy)


# low gdp quartiles
low_gdp_quartiles <- quantile(low_gdp, c(0.25,0.5,0.75))



# high gdp quartiles
high_gdp_quartiles <- quantile(high_gdp, c(0.25,0.5,0.75))

```

```{r message=FALSE, error=TRUE}
# plot low gdp histogram
hist(low_gdp,col='red')
hist(high_gdp,col='blue')

# plot high gdp histogram

```