package com.example.demo.crawler;

import java.io.IOException;

import lombok.extern.slf4j.Slf4j;
//import org.apache.log4j.Logger;
import org.jsoup.Connection;
import org.jsoup.helper.HttpConnection;
import org.jsoup.nodes.Document;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import top.starp.util.ExcepLogger;
//import com.sicnu.yudidi.utils.log.ExcepLogger;

@Slf4j
public class CrawlerNoCookie extends CrawlerBase {

//	private final static Logger log = Logger.getLogger(CrawlerNoCookie.class);
	static {
		trustEveryone();
	}

	public static JSONObject getJson(String url, String method) {
		log.debug(String.format("url:%s|method:%s", url, method));
		sleep();
		JSONObject jsonObject = null;
		Connection conn = null;
		try {
			conn = HttpConnection.connect(url).header("Accept", "*/*").header("Accept-Encoding", "gzip, deflate").header("Accept-Language", "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3")
					.header("Content-Type", "application/json;charset=UTF-8").timeout(CrawlerConfig.TIME_OUT).ignoreContentType(true);
			String json = null;
			switch (method) {
				case "get" :
					json = conn.get().body().text();
					break;
				case "post" :
					json = conn.post().body().text();
					break;
				case "excute" :
					json = conn.execute().body();
					break;
			}
			jsonObject = (JSONObject) JSON.parse(json);
		} catch (IOException e) {
//			ExcepLogger.log(e);
//			log.info(e);
			e.printStackTrace();
		}
		return jsonObject;
	}

	public static String getJsonContent(String url, String method) {
		log.debug(String.format("url:%s|method:%s", url, method));
		String jsonContent = null;
		Connection conn = null;
		do {
			sleep();
			try {
				conn = HttpConnection.connect(url).header("Accept", "*/*").header("Accept-Encoding", "gzip, deflate").header("Accept-Language", "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3")
						.header("Content-Type", "application/json;charset=UTF-8").timeout(CrawlerConfig.TIME_OUT).ignoreContentType(true);
				switch (method) {
					case "get" :
						jsonContent = conn.get().body().text();
						break;
					case "post" :
						jsonContent = conn.post().body().text();
						break;
					case "excute" :
						jsonContent = conn.execute().body();
						break;
				}
			} catch (IOException e) {
				ExcepLogger.log(e);
			}
		} while (jsonContent == null && !Thread.currentThread().isInterrupted());
		return jsonContent;
	}

	public static Document getPageContent(String url, String method) {
		log.debug(String.format("url:%s|method:%s", url, method));
		Document doc = null;
		Connection conn = HttpConnection.connect(url).timeout(CrawlerConfig.TIME_OUT);
		do {
			sleep();
			try {
				doc = method.equals("get") ? conn.get() : conn.post();
			} catch (IOException e) {
				ExcepLogger.log(e,String.format("getPageContent failed : %s",url));
			}
			log.debug(String.format("Thread %s |!Thread.currentThread().isInterrupted() == %s",Thread.currentThread().getId(), !Thread.currentThread().isInterrupted()));
		} while (doc == null && !Thread.currentThread().isInterrupted());
		return doc;
	}
}
