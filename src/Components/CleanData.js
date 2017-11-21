function cleanSkiData(data) {
	return data.items.reduce((cleanedArray, resort) => {
		cleanedArray.push({
			name: resort.resortName,
			state: resort.id === '303010' || 
						 resort.id === '999812026' || 
						 resort.id === '719002' || 
						 resort.id === '303017' || 
						 resort.id === '303387' || 
						 resort.id === '720024' || 
						 resort.id === '303022' || 
						 resort.id === '303025' ? resort.state = 'southernCO' : resort.state,
			todayWeather: resort.forecastWeather,
			baseAlt: resort.lowBaseElevation,
			peakAlt: resort.highLiftElevation,
			baseTempToday: resort.forecastBaseTemp,
			peakTempToday: resort.forecastTopTemp,
			snowBase: resort.avgBaseDepthMin,
			currentSnowConditions: resort.primarySurfaceCondition,
			liftsOpen: resort.openDownHillLifts,
			liftsTotal: resort.maxOpenDownHillLifts,
			trailsOpen: resort.openDownHillTrails,
			trailsTotal: resort.maxOpenDownHillTrails,
			lastSnowDate: resort.lastSnowFallDate,
			lastSnowAmount: resort.lastSnowFallAmount,
			last48HoursSnow: resort.snowLast48Hours,
			address: resort.resortAddress,
			hoursWeekday: resort.weekdayHours,
			hoursWeekend: resort.weekendHours,
			websiteURL: resort.webSiteLink,
			trailMapThumbnail: resort.tnTrailMapURL,
			trailMapBig: resort.lgTrailMapURL
		})
		return cleanedArray;
	}, [])
}

export default cleanSkiData;