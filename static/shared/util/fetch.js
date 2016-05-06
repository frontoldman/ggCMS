import { message } from 'antd';
import { browserHistory } from 'react-router'

module.exports = function(url, fetchConfig){

	const config = {
		credentials: 'include'
	}

	const fetchPromise = fetch(url, {
		...config,
		...fetchConfig
	}).then(
		response => {
			if(response.ok){
				return response.json()
			}

			throw response;			
		}
	)

	fetchPromise.catch(e => {

		//程序内部错误
		if(e instanceof Response){
			switch(e.status){
				case 401:
					message.warn('用户未登录或会话过期');
					browserHistory.push('/login')
					break;
				case 500:
					message.error('程序内部故障');
					break;
			}
		}else{
			message.error('请求故障');
		}

	})

	return fetchPromise

}