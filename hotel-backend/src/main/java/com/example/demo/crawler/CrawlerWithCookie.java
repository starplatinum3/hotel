package com.example.demo.crawler;

import java.io.IOException;

//import org.apache.log4j.Logger;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Connection;
import org.jsoup.helper.HttpConnection;
import org.jsoup.nodes.Document;
import top.starp.util.ExcepLogger;

//import com.sicnu.yudidi.utils.log.ExcepLogger;

@Slf4j
public class CrawlerWithCookie extends CrawlerBase {

//	private final static Logger log = Logger.getLogger(CrawlerWithCookie.class);
	static {
		trustEveryone();
	}

	/**
	 * 直到成功才能返回
	 * @param url
	 * @param method
	 * @return
	 */
	public static Document getPageContent(String url, String method) {
		log.debug(String.format("url:%s|method:%s", url, method));
		Document doc = null;
		Connection conn = HttpConnection.connect(url).timeout(CrawlerConfig.TIME_OUT);
		conn.header("Accept-Encoding", "gzip,deflate,sdch");
		conn.header("Connection", "close");
		conn.header("Cookie", CrawlerConfig.COOKIES);
		do {
			sleep();
			log.debug(String.format("Thread %d|Thread.interrupted() == %s",Thread.currentThread().getId(), Thread.currentThread().isInterrupted()));
			try {
				doc = method.equals("get") ? conn.get() : conn.post();
			} catch (IOException e) {
				ExcepLogger.log(e,"getPageContent失败|"+url);
			} catch (Exception e) {
				ExcepLogger.log(e,"getPageContent失败|"+url);
			}
		} while (doc == null && !Thread.currentThread().isInterrupted());
		return doc;
	}
}
