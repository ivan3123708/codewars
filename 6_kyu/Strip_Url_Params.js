function stripUrlParams(url, paramsToStrip) {
	let queries = url.match(/\?.+/g);
  let queriesRes = [];
  
  if (queries) {
    let queriesObj = queries[0]
      .slice(1)
      .split('&')
      .map((query) => query.split('='))
      .reduce((acc, curr) => {
        if (!acc[curr[0]]) {
          acc[curr[0]] = curr[1];
        };

        return acc;
      }, {});

    for (let key in queriesObj) {
      queriesRes.push(`${key}=${queriesObj[key]}`);
    }

    if (paramsToStrip) {
      queriesRes = queriesRes.filter((query) => paramsToStrip.indexOf(query.split('=')[0]) < 0);
    }

    return `${url.split('?')[0]}?${queriesRes.join('&')}`;
  }
  
  return url;
};