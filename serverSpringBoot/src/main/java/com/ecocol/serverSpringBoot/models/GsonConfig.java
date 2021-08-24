/*package com.ecocol.serverSpringBoot.models;

import com.google.gson.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import springfox.documentation.spring.web.json.Json;
import java.lang.reflect.Type;
 
@Configuration
class GsonConfig {
 
    @Value("\${spring.gson.date-format}");
    private lateinit var GSON_DATE_FORMAT: String;
 
    @Bean
    function gson(): Gson {
        return GsonBuilder().setDateFormat(GSON_DATE_FORMAT).registerTypeAdapter(Json::class.java, SpringfoxJsonToGsonAdapter()).create()
    }
 
    @Bean
    fun httpMessageConverters(): HttpMessageConverters {
        val gsonHttpMessageConverter = GsonHttpMessageConverter()
        gsonHttpMessageConverter.gson = gson()
        return HttpMessageConverters(true, listOf(gsonHttpMessageConverter))
    }
 
}
 
internal class SpringfoxJsonToGsonAdapter : JsonSerializer<Json> {
 
    override fun serialize(json: Json, type: Type, context: JsonSerializationContext): JsonElement = JsonParser().parse(json.value())
 
}*/