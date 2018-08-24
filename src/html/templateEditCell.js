
var templateEditCell = "";
templateEditCell += "<div id=\"feature_{{contentId}}\" class=\"o-feature-cell-container\">";
templateEditCell += "				<div class=\"o-feature-overlay\">";
templateEditCell += "					";
templateEditCell += "					<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"";
templateEditCell += "				 		viewBox=\"0 0 482.14 482.14\" style=\"enable-background:new 0 0 482.14 482.14;\" xml:space=\"preserve\" class=\"o-feature-overlay-svg\">";
templateEditCell += "					<g>";
templateEditCell += "						<path d=\"M341.766,430.824c0,10.969-8.903,19.874-19.856,19.874H57.687c-10.953,0-19.875-8.905-19.875-19.874V51.315";
templateEditCell += "							c0-10.953,8.922-19.858,19.875-19.858l181.89-0.188v67.217c0,16.991,11.932,31.159,27.849,34.704l58.684-58.683L251.333,0H57.687";
templateEditCell += "							C29.398,0,6.372,23.026,6.372,51.315v379.509c0,28.289,23.026,51.316,51.315,51.316H321.91c28.273,0,51.3-23.026,51.3-51.316";
templateEditCell += "							V215.877l-31.899,31.898L341.766,430.824z\"\/>";
templateEditCell += "						<path d=\"M375.967,70.291c-2.27-2.271-5.352-3.547-8.558-3.547c-3.207,0-6.29,1.276-8.559,3.547L120.476,308.666";
templateEditCell += "							c-1.441,1.441-2.499,3.223-3.065,5.178l-19.93,68.517c-1.229,4.239-0.055,8.818,3.065,11.938c2.301,2.302,5.39,3.548,8.558,3.548";
templateEditCell += "							c1.127,0,2.269-0.158,3.381-0.482l68.518-19.921c1.955-0.568,3.734-1.624,5.177-3.065l238.375-238.376";
templateEditCell += "							c4.729-4.727,4.729-12.387,0-17.115L375.967,70.291z M367.409,95.965l15.737,15.736l-211.04,211.038l-15.736-15.737L367.409,95.965";
templateEditCell += "							z M149.073,361.519l-15.737-15.737l6.211-21.37l30.897,30.889L149.073,361.519z\"\/>";
templateEditCell += "						<path d=\"M462.152,32.695c-8.778-8.78-20.44-13.61-32.852-13.61c-12.413,0-24.074,4.83-32.853,13.61l-4.704,4.704";
templateEditCell += "							c-4.729,4.729-4.729,12.388,0,17.115l48.588,48.598c2.365,2.362,5.462,3.546,8.558,3.546c3.098,0,6.186-1.184,8.55-3.539";
templateEditCell += "							l4.729-4.719c8.77-8.78,13.6-20.449,13.6-32.854C475.768,53.309,470.804,41.331,462.152,32.695z M448.424,76.965l-30.536-30.534";
templateEditCell += "							c8.377-5.044,20.032-3.72,27.155,3.388c4.137,4.138,6.517,9.873,6.517,15.728C451.56,69.63,450.466,73.553,448.424,76.965z\"\/>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<\/svg>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-sort {{hideFeature}}\"><label>Display Sequence : &nbsp;&nbsp;</label><input type=\"number\" class=\"o-feature-sort-input\" max=\"99\"  min=\"0\" placeholder=\"Set Order\" value='{{displaySequence}}' \/><\/div>";
templateEditCell += "				<div class=\"o-feature-content {{hideFeature}}\">";
templateEditCell += "					<div class=\"o-feature-left\">";
templateEditCell += "				<div class=\"o-feature-brand\" contenteditable>{{primaryTitle}}<\/div>";
templateEditCell += "						<header class=\"o-feature-title\" contenteditable>";
templateEditCell += "							{{secondaryTitle}}";
templateEditCell += "						<\/header>";
templateEditCell += "						<div>";
templateEditCell += "							<p  class=\"o-feature-description\" contenteditable>{{description}}<\/p>";
templateEditCell += "						<\/div>";
templateEditCell += "					<div class=\"o-feature-action-button-divwrap\" ><div class=\"o-feature-action-button\" contenteditable><div>{{ctaText}}<\/div><\/div>";
templateEditCell += "					<div class=\"o-feature-action-url-colon\">&nbsp;:&nbsp;<\/div>";
templateEditCell += "					<div class=\"o-feature-action-url\" contenteditable>{{ctaUrl}}<\/div>";
templateEditCell += "                    <\/div>";
templateEditCell += "					<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "					<\/div>";
templateEditCell += "					<div class=\"o-feature-right\">";
templateEditCell += "						<div class=\"o-feature-img-border\">";
templateEditCell += "							<img width=\"160\" height=\"160\" src=\"{{resourceUrl}}\" onerror=\"'{{resourceUrl}}'?this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDx0aXRsZT5iYWQgaW1hZ2U8L3RpdGxlPiA8Zz4gIDx0aXRsZT5MYXllciAxPC90aXRsZT4gIDxnIGlkPSJzdmdfMyI+ICAgPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjI0IiBpZD0ic3ZnXzEiIHk9IjY3IiB4PSI3OSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZjAwMDAiPkJhZCBJbWFnZTwvdGV4dD4gICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGlkPSJzdmdfMiIgeT0iOTMiIHg9Ijc4IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI2ZmMDAwMCI+bGluayE8L3RleHQ+ICA8L2c+IDwvZz48L3N2Zz4=':this.src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxNjBweCIgaGVpZ2h0PSIxNjBweCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiNFOEU4RTgiIGQ9Ik0wLDB2NjAwaDYwMFYwSDB6IE01OTQuOTc5LDU5NEg3VjYuMDIxaDU4Ny45NzlWNTk0eiIvPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjIyLjQ1MiwxNTIuMTcgMTg0LjU3NCwxNTYuODIxIDIyMi40NTIsMTUyLjE3ICIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zODMuNDY4LDM5MS40OThjLTEuNDMzLDAtMi42NDcsMC41MjMtMy42NDIsMS41NjhjLTAuOTk1LDEuMDQ2LTEuNjA4LDIuNDE1LTEuODM4LDQuMTA0aDEwLjE4NmMtMC4wMTUtMS43ODktMC40MzgtMy4xODMtMS4yNjktNC4xNzlDMzg2LjA3NCwzOTEuOTk2LDM4NC45MjksMzkxLjQ5OCwzODMuNDY4LDM5MS40OTh6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQxMy4xMzcsNDYwLjUwNmMtMi4xMTcsMC0zLjkxLDAuNzcxLTUuMzgsMi4zMTVjLTEuNDczLDEuNTQ1LTIuMzc2LDMuNTY2LTIuNzE0LDYuMDYzaDE1LjA0NGMtMC4wMjEtMi42NDYtMC42NDYtNC43MDMtMS44NzItNi4xNzVDNDE2Ljk4Niw0NjEuMjQsNDE1LjI5NSw0NjAuNTA2LDQxMy4xMzcsNDYwLjUwNnoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzE1Ljg0NCw0NzQuODY3Yy0xLjA3LDAuNzUxLTEuNjA0LDIuMDY4LTEuNjA0LDMuOTUxYzAsMS4zNzYsMC40OTIsMi41MDIsMS40NzcsMy4zOGMwLjk4MiwwLjg3OSwyLjMwMSwxLjMxNywzLjk1MSwxLjMxN2MyLjI0MiwwLDQuMDk4LTAuNzg4LDUuNTY5LTIuMzY0YzEuNDcxLTEuNTc2LDIuMjA2LTMuNTU5LDIuMjA2LTUuOTUxdi0yLjgyNWwtNi44MjQsMC45NTNDMzE4LjUwNCw0NzMuNjAzLDMxNi45MSw0NzQuMTE2LDMxNS44NDQsNDc0Ljg2N3oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjQ3Ljk1NSw0NzQuODY3Yy0xLjA2OSwwLjc1MS0xLjYwMywyLjA2OC0xLjYwMywzLjk1MWMwLDEuMzc2LDAuNDkyLDIuNTAyLDEuNDc2LDMuMzhjMC45ODMsMC44NzksMi4zMDEsMS4zMTcsMy45NTEsMS4zMTdjMi4yNDIsMCw0LjA5OS0wLjc4OCw1LjU3LTIuMzY0YzEuNDcxLTEuNTc2LDIuMjA2LTMuNTU5LDIuMjA2LTUuOTUxdi0yLjgyNWwtNi44MjQsMC45NTNDMjUwLjYxNSw0NzMuNjAzLDI0OS4wMjIsNDc0LjExNiwyNDcuOTU1LDQ3NC44Njd6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM2Mi45MjksMzk3LjQwNmMwLTEuNTQ3LTAuNTEyLTIuODY4LTEuNTM1LTMuOTY0Yy0xLjAyNS0xLjA5Ni0yLjMwMy0xLjY0NC0zLjgzNi0xLjY0NGMtMS44OTEsMC0zLjM3LDAuNjk5LTQuNDM3LDIuMDk1Yy0xLjA2OCwxLjM5Ni0xLjYwMiwzLjM0OS0xLjYsNS44NTRjMCwyLjE2MywwLjUxMiwzLjg5MywxLjUzNyw1LjE4OGMxLjAyMywxLjI5NywyLjM4MSwxLjk0NCw0LjA3LDEuOTQ0YzEuNzE4LDAsMy4xMTQtMC42MTksNC4xODgtMS44NThjMS4wNzQtMS4yMzgsMS42MTEtMi44MjUsMS42MTEtNC43NTlWMzk3LjQwNnoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzI5LjEwMyw0MDEuMjJjLTAuNzI1LDAuNTA5LTEuMDg2LDEuNC0xLjA4NiwyLjY3NWMwLDAuOTMyLDAuMzM0LDEuNjk0LDEsMi4yODhjMC42NjYsMC41OTUsMS41NTcsMC44OTIsMi42NzQsMC44OTJjMS41MTksMCwyLjc3NS0wLjUzNCwzLjc3MS0xLjYwMWMwLjk5NC0xLjA2NiwxLjQ5MS0yLjQwOSwxLjQ5MS00LjAyOHYtMS45MTNsLTQuNjE4LDAuNjQ2QzMzMC45MDMsNDAwLjM2NCwzMjkuODI1LDQwMC43MTIsMzI5LjEwMyw0MDEuMjJ6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM1OS41NjEsNDYwLjk0OWMtMi42MjUsMC00LjczNCwwLjkzMy02LjMzMiwyLjc5M2MtMS41OTcsMS44NjItMi4zOTYsNC4xODktMi4zOTYsNi45ODJ2NC4wMzFjMCwyLjM2OSwwLjc1Niw0LjM4LDIuMjcsNi4wMjljMS41MTIsMS42NTEsMy40MzMsMi40NzcsNS43NiwyLjQ3N2MyLjczMSwwLDQuODczLTEuMDYzLDYuNDI5LTMuMTg5YzEuNTU1LTIuMTI3LDIuMzMyLTUuMDk0LDIuMzMtOC45MDJjMC0zLjE5NC0wLjcyNS01LjY5Ni0yLjE3NC03LjUwN0MzNjMuOTk5LDQ2MS44NTQsMzYyLjAzNSw0NjAuOTQ5LDM1OS41NjEsNDYwLjk0OXoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTg0LjQ5NCw0NDkuNTg5aC0wLjEyN2MtMC4xOTEsMS4yMDQtMC40MDMsMi4xNTctMC42MzUsMi44NTRsLTYuMjUyLDE4LjE1NGgxMy45MzNsLTYuMzE2LTE4LjE1NEMxODQuOTA3LDQ1MS44NTMsMTg0LjcwNSw0NTAuOSwxODQuNDk0LDQ0OS41ODl6Ii8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI0MDUuNjQ5LDMwNS4yODIgMzk0LjQ1OCwyODkuMjk4IDM5NC40NTgsMjg5LjI5OCA0MDUuNjQ5LDMwNS4yODMgNDI1Ljc0OCwxNzguMzk5IDQyNS43NDgsMTc4LjM5OSAiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNyw1OTRoNTg3Ljk3OVY2LjAyMUg3VjU5NHogTTE5Ny41MDYsNDg4LjM0MWwtNC4wOTQtMTEuNTg0aC0xNy45bC0zLjkzNiwxMS41ODRoLTguMjUybDE3LjA0My00NS41MTRoOC41MDZsMTYuOTE3LDQ1LjUxNEgxOTcuNTA2eiBNMjIyLjcyMiwzOTkuMzg0di0xOS44NTNoNC45MnYzMC44MWgtNS41ODZsLTE0LjcxNy0yMi42NDZjLTAuMzczLTAuNTcyLTAuNjgxLTEuMTY3LTAuOTI0LTEuNzgzaC0wLjEyOWMwLjExNCwwLjY1OSwwLjE3MiwyLjA3LDAuMTcyLDQuMjMydjIwLjE5NmgtNC45NDF2LTMwLjgxaDUuOTUxbDE0LjIyMywyMi4xMDdjMC42MDEsMC45MTcsMC45ODgsMS41NDcsMS4xNiwxLjg5MWgwLjA4NkMyMjIuNzkyLDQwMi43MTMsMjIyLjcyMiw0MDEuMzMxLDIyMi43MjIsMzk5LjM4NHogTTIyNS4yNDUsNDg4LjM0aC03Ljk2NmwtMTEuOTY1LTMyLjVoNy45OThsNy4yMDUsMjIuNzI1YzAuNTUsMS42NzIsMC44ODksMy4xMzIsMS4wMTYsNC4zOGgwLjA5NWMwLjE5MS0xLjU2NCwwLjQ4Ny0yLjk4MywwLjg4OS00LjI1M2w3LjU1Mi0yMi44NTJoNy43NDRMMjI1LjI0NSw0ODguMzR6IE0yMzMuMjkyLDM5OS41OThjMC0zLjY5NSwxLjA1Ni02LjU4MSwzLjE2OS04LjY1OGMyLjExMi0yLjA3Niw0Ljk1OS0zLjExNSw4LjU0LTMuMTE1YzMuNDM3LDAsNi4xMTYsMS4wMSw4LjAzNSwzLjAyOXMyLjg3OSw0LjgyLDIuODc5LDguMzk5YzAsMy41MTEtMS4wMzUsNi4zMjEtMy4xMDQsOC40MzRjLTIuMDcsMi4xMTMtNC44NTIsMy4xNjktOC4zNDcsMy4xNjljLTMuMzk1LDAtNi4xMDYtMS4wMjctOC4xMzItMy4wODNDMjM0LjMwNSw0MDUuNzE4LDIzMy4yOTIsNDAyLjk5MiwyMzMuMjkyLDM5OS41OTh6IE0yNjYuNjY1LDQ4OC4zNDFoLTcuMTQxdi01LjA3OGgtMC4xMjdjLTIuMjQ0LDMuODk0LTUuNTM0LDUuODQtOS44NzEsNS44NGMtMy4xOTUsMC01LjY5Ni0wLjg2OC03LjUwNi0yLjYwNGMtMS44MDgtMS43MzQtMi43MTMtNC4wMy0yLjcxMy02Ljg4OGMwLTYuMTM2LDMuNTM0LTkuNzExLDEwLjYwMS0xMC43MjdsOS42NDgtMS4zNjVjMC00LjYzNC0yLjIwMS02Ljk1MS02LjYwMi02Ljk1MWMtMy44NzIsMC03LjM2NCwxLjMzNC0xMC40NzQsNHYtNi40NDNjMy40MjgtMi4wMyw3LjM4NC0zLjA0NywxMS44Ny0zLjA0N2M4LjIxLDAsMTIuMzE0LDQuMDQyLDEyLjMxNSwxMi4xMjRWNDg4LjM0MXogTTI4My4wMDksNDg4LjM0aC03LjM2M3YtMzIuNWg3LjM2M1Y0ODguMzR6IE0yODIuNTM0LDQ0Ny43OTNjLTAuODY4LDAuODE2LTEuOTI2LDEuMjIzLTMuMTc0LDEuMjIzYy0xLjIwNiwwLTIuMjM4LTAuMzkyLTMuMDk1LTEuMTc0Yy0wLjg1Ni0wLjc4Mi0xLjI4NS0xLjc3Ny0xLjI4NS0yLjk4M3MwLjQyOS0yLjIxMSwxLjI4NS0zLjAxNWMwLjg1OC0wLjgwNiwxLjg4OS0xLjIwNywzLjA5NS0xLjIwN2MxLjI0OCwwLDIuMzA2LDAuNDAyLDMuMTc0LDEuMjA2YzAuODY3LDAuODA0LDEuMzAxLDEuODA5LDEuMzAxLDMuMDE1QzI4My44MzQsNDQ2LDI4My40LDQ0Ni45NzksMjgyLjUzNCw0NDcuNzkzeiBNMjczLjYxOCw0MTAuMzQxdi0zMC44MWg1LjI2NHYzMC44MUgyNzMuNjE4eiBNMzAwLjAyMSw0ODguMzRoLTcuMzk2di00OC4xMTVoNy4zOTZWNDg4LjM0eiBNMzA2LjIyLDM5My43NTRjLTAuOTEsMS4zMDQtMS4zNjUsMi44NjUtMS4zNjUsNC42ODR2MTEuOTAyaC01LjAwNnYtMTIuMzk2YzAtNC4wOTYtMS40NDYtNi4xNDUtNC4zMzktNi4xNDVjLTEuMzQ2LDAtMi40NTMsMC42MTctMy4zMTksMS44NDhjLTAuODY3LDEuMjMyLTEuMywyLjgyOS0xLjMsNC43OTF2MTEuOTAyaC00Ljk4NHYtMjJoNC45ODR2My40NzloMC4wODZjMS41OS0yLjY2NCwzLjkwMy0zLjk5Niw2LjkzOS0zLjk5NmMxLjUxOCwwLDIuODQ3LDAuNDE5LDMuOTg2LDEuMjU3YzEuMTQsMC44MzgsMS45MTUsMS45MzgsMi4zMywzLjI5OWMxLjYzMy0zLjAzNyw0LjA2OS00LjU1Niw3LjMwNS00LjU1NmM0Ljg0MywwLDcuMjYzLDIuOTg2LDcuMjYzLDguOTU5djEzLjU1OGgtNC45ODR2LTExLjk4OGMwLTIuMzA2LTAuMzI3LTMuOTc2LTAuOTc3LTUuMDA2Yy0wLjY1Mi0xLjAzMS0xLjc1Mi0xLjU0Ny0zLjMwMS0xLjU0N0MzMDguMjM1LDM5MS43OTksMzA3LjEyOCwzOTIuNDUsMzA2LjIyLDM5My43NTR6IE0zMzQuNTU1LDQ4OC4zNDFoLTcuMTQzdi01LjA3OGgtMC4xMjdjLTIuMjQyLDMuODk0LTUuNTMyLDUuODQtOS44NjksNS44NGMtMy4xOTUsMC01LjY5Ny0wLjg2OC03LjUwOC0yLjYwNGMtMS44MDktMS43MzQtMi43MTQtNC4wMy0yLjcxNC02Ljg4OGMwLTYuMTM2LDMuNTM0LTkuNzExLDEwLjYwMy0xMC43MjdsOS42NDctMS4zNjVjMC00LjYzNC0yLjIwMi02Ljk1MS02LjYwMi02Ljk1MWMtMy44NzMsMC03LjM2NCwxLjMzNC0xMC40NzYsNHYtNi40NDNjMy40MjktMi4wMyw3LjM4Ni0zLjA0NywxMS44NzEtMy4wNDdjOC4yMDksMCwxMi4zMTQsNC4wNDIsMTIuMzE2LDEyLjEyNFY0ODguMzQxeiBNMzQxLjc2Nyw0MTAuMzQyaC00LjgzNHYtMy40MzhoLTAuMDg2Yy0xLjUxOSwyLjYzNi0zLjc0NSwzLjk1My02LjY4MywzLjk1M2MtMi4xNjEsMC0zLjg1NC0wLjU4Ny01LjA3OS0xLjc2MmMtMS4yMjYtMS4xNzUtMS44MzktMi43MjktMS44MzktNC42NjJjMC00LjE1NCwyLjM5NC02LjU3NCw3LjE3Ny03LjI2M2w2LjUzLTAuOTI0YzAtMy4xMzctMS40ODktNC43MDUtNC40NjktNC43MDVjLTIuNjIxLDAtNC45ODQsMC45MDItNy4wOSwyLjcwN3YtNC4zNjFjMi4zMi0xLjM3NSw0Ljk5OS0yLjA2Myw4LjAzNS0yLjA2M2M1LjU1OCwwLDguMzM2LDIuNzM2LDguMzM3LDguMjA4VjQxMC4zNDJ6IE0zNzEuMjczLDQ4NC4xOTljLTIuNjAyLDMuMjY5LTYuMTU3LDQuOTAzLTEwLjY2NCw0LjkwM2MtNC4yMzEsMC03LjQyNy0xLjgxOS05LjU4NS01LjQ1OWgtMC4xMjd2NC42OTdoLTcuMzYzdi00OC4xMTVoNy4zNjN2MjEuMzI4aDAuMTI3YzIuNTE5LTQuMzE3LDYuMTk5LTYuNDc2LDExLjA0NS02LjQ3NmM0LjEwNCwwLDcuMzE1LDEuNDU1LDkuNjMxLDQuMzY1YzIuMzE5LDIuOTA5LDMuNDc4LDYuODA3LDMuNDc4LDExLjY5NUMzNzUuMTc4LDQ3Ni41NzcsMzczLjg3Nyw0ODAuOTMsMzcxLjI3Myw0ODQuMTk5eiBNMzYyLjgsNDA2LjY0NWMtMS42NDcsMi44MDgtNC4xMjUsNC4yMTEtNy40MzUsNC4yMTFjLTIuNjc4LDAtNC44MzgtMC45NzctNi40NzctMi45MzJjLTEuNjQyLTEuOTU1LTIuNDYxLTQuNTc5LTIuNDYxLTcuODc0YzAtMy43MzgsMC44ODEtNi43MSwyLjY0My04LjkxN2MxLjc2Mi0yLjIwNSw0LjE4NC0zLjMwOSw3LjI2Mi0zLjMwOWMyLjkwOCwwLDUuMDY0LDEuMTg5LDYuNDY4LDMuNTY2aDAuMDg2di0zLjA1MWg0Ljk4M3YyMC4yMzdjMCw4LjA3OC00LjA2MSwxMi4xMTctMTIuMTgyLDEyLjExN2MtMi44NjQsMC01LjM2My0wLjQ3OS03LjQ5OC0xLjQzOFY0MTQuN2MyLjQwNywxLjM3NSw0LjY5MiwyLjA2Myw2Ljg1NCwyLjA2M2M1LjIyOSwwLDcuODQyLTIuNTcxLDcuODQyLTcuNzEzdi0yLjQwNkgzNjIuOHogTTM5MC4wOTUsNDg4LjM0aC03LjM5NnYtNDguMTE1aDcuMzk2VjQ4OC4zNHogTTM5Mi45ODMsNDAwLjY5MmgtMTQuOTk2YzAuMDU5LDIuMDM0LDAuNjg1LDMuNjAzLDEuODgxLDQuNzA1czIuODQsMS42NTQsNC45MzEsMS42NTRjMi4zNSwwLDQuNTA1LTAuNzAxLDYuNDY3LTIuMTA1djQuMDE5Yy0yLjAwNSwxLjI2MS00LjY1NCwxLjg5MS03Ljk0OSwxLjg5MWMtMy4yMzUsMC01Ljc3NC0wLjk5OS03LjYxNS0yLjk5N2MtMS44NDItMS45OTgtMi43NjItNC44MDktMi43NjItOC40MzNjMC0zLjQyNCwxLjAxNC02LjIxMywzLjA0MS04LjM2OGMyLjAyNi0yLjE1NSw0LjU0My0zLjIzMyw3LjU1MS0zLjIzM3M1LjMzNiwwLjk2Nyw2Ljk4MSwyLjg5OWMxLjY0NywxLjkzNSwyLjQ3MSw0LjYxOSwyLjQ3MSw4LjA1N1Y0MDAuNjkyeiBNNDI3LjE5Nyw0NzQuMDloLTIyLjE1MmMwLjA4NCwzLjAwNCwxLjAwOSw1LjMyLDIuNzc2LDYuOTQ5YzEuNzY2LDEuNjMxLDQuMTk0LDIuNDQ0LDcuMjgzLDIuNDQ0YzMuNDcxLDAsNi42NTUtMS4wMzcsOS41NTQtMy4xMTF2NS45MzdjLTIuOTYyLDEuODYyLTYuODc3LDIuNzkzLTExLjc0MiwyLjc5M2MtNC43ODIsMC04LjUzMy0xLjQ3Ny0xMS4yNTEtNC40MjhjLTIuNzIxLTIuOTUxLTQuMDc5LTcuMTA0LTQuMDc5LTEyLjQ1N2MwLTUuMDU3LDEuNDk3LTkuMTc4LDQuNDktMTIuMzYyYzIuOTk0LTMuMTgzLDYuNzE0LTQuNzc2LDExLjE1Ni00Ljc3NmM0LjQ0MywwLDcuODgxLDEuNDI5LDEwLjMxNSw0LjI4NWMyLjQzMiwyLjg1NSwzLjY0OCw2LjgyMywzLjY0OCwxMS45MDFoMC4wMDFWNDc0LjA5eiBNMTY0LjE0NiwxMzcuNjQzbDYxLjgxLTcuNTg5bDAuMjI2LTEuNDI2YzAuMzEtMS45NTcsMi4xNDgtMy4yOTIsNC4xMDUtMi45ODFsMTMuNzgyLDIuMTgzbDEzNy42ODgtMTYuOTA2YzEuOTY3LTAuMjQxLDMuNzU2LDEuMTU3LDMuOTk4LDMuMTI0bDQuNTM2LDM2Ljk0MWw1Ni41NCw4Ljk1NWMxLjk1OSwwLjMxMSwzLjI5MSwyLjE0OCwyLjk4MSw0LjEwNWwtMjYuODEzLDE2OS4zMDdjLTAuMzExLDEuOTU3LTIuMTQ2LDMuMjkxLTQuMTA1LDIuOTgybC0xNzcuOTY3LTI4LjE4OGwtNTUuMDE0LDYuNzU1Yy0xLjk2NSwwLjI0Mi0zLjc1Ni0xLjE1Ni0zLjk5OC0zLjEyM2wtMjAuODg5LTE3MC4xNEMxNjAuNzgyLDEzOS42NzQsMTYyLjE4MSwxMzcuODg0LDE2NC4xNDYsMTM3LjY0M3oiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjM2Ni41NzYsMTM0LjQ3NSAzNjguMTc0LDE0Ny40ODUgMzY4LjE3NCwxNDcuNDg1IDM2Ni41NzYsMTM0LjQ3NCAzMjEuMTk4LDE0MC4wNDUgMzIxLjIwMSwxNDAuMDQ2ICIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNDkuMjIyLDQwNC45NDZjMS4wNTMtMS4zMDIsMS41NzktMy4xNTgsMS41NzktNS41NjNjMC0yLjQxOS0wLjUyNi00LjI4OS0xLjU3OS01LjYwN2MtMS4wNTItMS4zMTgtMi41Ni0xLjk3Ny00LjUyMi0xLjk3N2MtMS45NDgsMC0zLjQ4OCwwLjY4MS00LjYxOSwyLjA0MWMtMS4xMzIsMS4zNjEtMS42OTcsMy4yMzctMS42OTgsNS42MjljMCwyLjMwNiwwLjU3Myw0LjEyMiwxLjcxOSw1LjQ0NWMxLjE0NiwxLjMyNSwyLjY3OSwxLjk4Nyw0LjU5OCwxLjk4N0MyNDYuNjYxLDQwNi45MDEsMjQ4LjE2OCw0MDYuMjUsMjQ5LjIyMiw0MDQuOTQ2eiIvPjxyZWN0IHg9IjM3Ni44NTYiIHk9IjIxOC4xOTUiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIwIiBoZWlnaHQ9IjAuMDAxIi8+PHJlY3QgeD0iMzczLjA1NSIgeT0iMTg3LjIzMyIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjAiIGhlaWdodD0iMCIvPjxwYXRoIGZpbGw9IiMyODk5QzEiIGQ9Ik0yMjEuNjksNDAxLjYzOWwtMTQuMjIzLTIyLjEwN2gtNS45NTF2MzAuODFoNC45NDF2LTIwLjE5NmMwLTIuMTYyLTAuMDU4LTMuNTczLTAuMTcyLTQuMjMyaDAuMTI5YzAuMjQzLDAuNjE2LDAuNTUxLDEuMjExLDAuOTI0LDEuNzgzbDE0LjcxNywyMi42NDZoNS41ODZ2LTMwLjgxaC00LjkydjE5Ljg1M2MwLDEuOTQ3LDAuMDcxLDMuMzI5LDAuMjE1LDQuMTQ2aC0wLjA4NkMyMjIuNjc5LDQwMy4xODYsMjIyLjI5Miw0MDIuNTU2LDIyMS42OSw0MDEuNjM5eiIvPjxwYXRoIGZpbGw9IiMyODk5QzEiIGQ9Ik0yNTIuODExLDQwNy42ODdjMi4wNjktMi4xMTIsMy4xMDQtNC45MjMsMy4xMDQtOC40MzRjMC0zLjU3OS0wLjk2LTYuMzgtMi44NzktOC4zOTlzLTQuNTk4LTMuMDI5LTguMDM1LTMuMDI5Yy0zLjU4MSwwLTYuNDI4LDEuMDM5LTguNTQsMy4xMTVjLTIuMTEzLDIuMDc3LTMuMTY5LDQuOTYzLTMuMTY5LDguNjU4YzAsMy4zOTUsMS4wMTMsNi4xMiwzLjA0LDguMTc1YzIuMDI2LDIuMDU2LDQuNzM3LDMuMDgzLDguMTMyLDMuMDgzQzI0Ny45NTgsNDEwLjg1NSwyNTAuNzQxLDQwOS44LDI1Mi44MTEsNDA3LjY4N3ogTTI0MC4xMDIsNDA0LjkxNGMtMS4xNDYtMS4zMjMtMS43MTktMy4xNC0xLjcxOS01LjQ0NWMwLjAwMS0yLjM5MiwwLjU2Ni00LjI2OCwxLjY5OC01LjYyOWMxLjEzMS0xLjM2LDIuNjcxLTIuMDQxLDQuNjE5LTIuMDQxYzEuOTYyLDAsMy40NywwLjY1OCw0LjUyMiwxLjk3N2MxLjA1MywxLjMxOCwxLjU3OSwzLjE4OCwxLjU3OSw1LjYwN2MwLDIuNDA1LTAuNTI2LDQuMjYyLTEuNTc5LDUuNTYzYy0xLjA1MywxLjMwNC0yLjU2MSwxLjk1NS00LjUyMiwxLjk1NUMyNDIuNzgxLDQwNi45MDEsMjQxLjI0OCw0MDYuMjM5LDI0MC4xMDIsNDA0LjkxNHoiLz48cmVjdCB4PSIyNzMuNjE4IiB5PSIzNzkuNTMxIiBmaWxsPSIjMjg5OUMxIiB3aWR0aD0iNS4yNjQiIGhlaWdodD0iMzAuODEiLz48cGF0aCBmaWxsPSIjMjg5OUMxIiBkPSJNMzEyLjgzOCwzOTMuMzQ2YzAuNjQ5LDEuMDMsMC45NzcsMi43LDAuOTc3LDUuMDA2djExLjk4OGg0Ljk4NHYtMTMuNTU4YzAtNS45NzMtMi40Mi04Ljk1OS03LjI2My04Ljk1OWMtMy4yMzUsMC01LjY3MiwxLjUxOS03LjMwNSw0LjU1NmMtMC40MTUtMS4zNi0xLjE5LTIuNDYxLTIuMzMtMy4yOTljLTEuMTM5LTAuODM4LTIuNDY4LTEuMjU3LTMuOTg2LTEuMjU3Yy0zLjAzNiwwLTUuMzQ5LDEuMzMyLTYuOTM5LDMuOTk2aC0wLjA4NnYtMy40NzloLTQuOTg0djIyaDQuOTg0di0xMS45MDJjMC0xLjk2MiwwLjQzMy0zLjU1OSwxLjMtNC43OTFjMC44NjYtMS4yMywxLjk3My0xLjg0OCwzLjMxOS0xLjg0OGMyLjg5MywwLDQuMzM5LDIuMDQ5LDQuMzM5LDYuMTQ1djEyLjM5Nmg1LjAwNnYtMTEuOTAyYzAtMS44MTgsMC40NTUtMy4zOCwxLjM2NS00LjY4NGMwLjkwOC0xLjMwNCwyLjAxNi0xLjk1NSwzLjMxNy0xLjk1NUMzMTEuMDg2LDM5MS43OTksMzEyLjE4NiwzOTIuMzE0LDMxMi44MzgsMzkzLjM0NnoiLz48cGF0aCBmaWxsPSIjMjg5OUMxIiBkPSJNMzMzLjQzLDM4Ny44MjRjLTMuMDM2LDAtNS43MTUsMC42ODgtOC4wMzUsMi4wNjN2NC4zNjFjMi4xMDUtMS44MDUsNC40NjktMi43MDcsNy4wOS0yLjcwN2MyLjk3OSwwLDQuNDY5LDEuNTY4LDQuNDY5LDQuNzA1bC02LjUzLDAuOTI0Yy00Ljc4MywwLjY4OC03LjE3NywzLjEwOC03LjE3Nyw3LjI2M2MwLDEuOTM0LDAuNjEzLDMuNDg3LDEuODM5LDQuNjYyYzEuMjI1LDEuMTc1LDIuOTE4LDEuNzYyLDUuMDc5LDEuNzYyYzIuOTM4LDAsNS4xNjQtMS4zMTcsNi42ODMtMy45NTNoMC4wODZ2My40MzhoNC44MzR2LTE0LjMxQzM0MS43NjYsMzkwLjU2MSwzMzguOTg3LDM4Ny44MjQsMzMzLjQzLDM4Ny44MjR6IE0zMzYuOTUzLDQwMS40NDVjMCwxLjYxOS0wLjQ5NywyLjk2Mi0xLjQ5MSw0LjAyOGMtMC45OTYsMS4wNjYtMi4yNTMsMS42MDEtMy43NzEsMS42MDFjLTEuMTE3LDAtMi4wMDgtMC4yOTctMi42NzQtMC44OTJjLTAuNjY2LTAuNTk0LTEtMS4zNTYtMS0yLjI4OGMwLTEuMjc0LDAuMzYxLTIuMTY2LDEuMDg2LTIuNjc1YzAuNzIzLTAuNTA4LDEuODAxLTAuODU1LDMuMjMyLTEuMDQybDQuNjE4LTAuNjQ2VjQwMS40NDV6Ii8+PHBhdGggZmlsbD0iIzI4OTlDMSIgZD0iTTM1NS4wNDQsNDE2Ljc2NGMtMi4xNjIsMC00LjQ0Ny0wLjY4OC02Ljg1NC0yLjA2M3Y0LjU1NmMyLjEzNSwwLjk1OSw0LjYzNCwxLjQzOCw3LjQ5OCwxLjQzOGM4LjEyMSwwLDEyLjE4Mi00LjAzOSwxMi4xODItMTIuMTE3VjM4OC4zNGgtNC45ODN2My4wNTFIMzYyLjhjLTEuNDAzLTIuMzc3LTMuNTYtMy41NjYtNi40NjgtMy41NjZjLTMuMDc4LDAtNS41LDEuMTA0LTcuMjYyLDMuMzA5Yy0xLjc2MiwyLjIwNy0yLjY0Myw1LjE3OS0yLjY0Myw4LjkxN2MwLDMuMjk1LDAuODE5LDUuOTE5LDIuNDYxLDcuODc0YzEuNjM5LDEuOTU1LDMuNzk5LDIuOTMyLDYuNDc3LDIuOTMyYzMuMzEsMCw1Ljc4Ny0xLjQwMyw3LjQzNS00LjIxMWgwLjA4NnYyLjQwNkMzNjIuODg2LDQxNC4xOTIsMzYwLjI3Miw0MTYuNzY0LDM1NS4wNDQsNDE2Ljc2NHogTTM2MS4zMTcsNDA1LjAyMmMtMS4wNzQsMS4yMzktMi40NzEsMS44NTgtNC4xODgsMS44NThjLTEuNjg5LDAtMy4wNDctMC42NDctNC4wNy0xLjk0NGMtMS4wMjUtMS4yOTYtMS41MzctMy4wMjUtMS41MzctNS4xODhjLTAuMDAyLTIuNTA2LDAuNTMxLTQuNDU4LDEuNi01Ljg1NGMxLjA2Ni0xLjM5NiwyLjU0Ni0yLjA5NSw0LjQzNy0yLjA5NWMxLjUzMywwLDIuODExLDAuNTQ4LDMuODM2LDEuNjQ0YzEuMDIzLDEuMDk2LDEuNTM1LDIuNDE3LDEuNTM1LDMuOTY0djIuODU3QzM2Mi45MjksNDAyLjE5NywzNjIuMzkyLDQwMy43ODQsMzYxLjMxNyw0MDUuMDIyeiIvPjxwYXRoIGZpbGw9IiMyODk5QzEiIGQ9Ik0zODMuNTMxLDM4Ny44MjRjLTMuMDA4LDAtNS41MjQsMS4wNzgtNy41NTEsMy4yMzNjLTIuMDI3LDIuMTU1LTMuMDQxLDQuOTQ0LTMuMDQxLDguMzY4YzAsMy42MjQsMC45Miw2LjQzNSwyLjc2Miw4LjQzM2MxLjg0MSwxLjk5OCw0LjM4LDIuOTk3LDcuNjE1LDIuOTk3YzMuMjk1LDAsNS45NDQtMC42Myw3Ljk0OS0xLjg5MXYtNC4wMTljLTEuOTYyLDEuNDA0LTQuMTE3LDIuMTA1LTYuNDY3LDIuMTA1Yy0yLjA5MSwwLTMuNzM0LTAuNTUyLTQuOTMxLTEuNjU0cy0xLjgyMi0yLjY3MS0xLjg4MS00LjcwNWgxNC45OTZ2LTEuOTEyYzAtMy40MzgtMC44MjMtNi4xMjItMi40NzEtOC4wNTdDMzg4Ljg2NywzODguNzkxLDM4Ni41MzksMzg3LjgyNCwzODMuNTMxLDM4Ny44MjR6IE0zNzcuOTg4LDM5Ny4xN2MwLjIyOS0xLjY4OCwwLjg0My0zLjA1OCwxLjgzOC00LjEwNGMwLjk5NC0xLjA0NSwyLjIwOS0xLjU2OCwzLjY0Mi0xLjU2OGMxLjQ2MSwwLDIuNjA2LDAuNDk4LDMuNDM4LDEuNDkzYzAuODMxLDAuOTk2LDEuMjU0LDIuMzksMS4yNjksNC4xNzlIMzc3Ljk4OHoiLz48cGF0aCBmaWxsPSIjMjg5OUMxIiBkPSJNMTgwLjM2OCw0NDIuODI3bC0xNy4wNDMsNDUuNTE0aDguMjUybDMuOTM2LTExLjU4NGgxNy45bDQuMDk0LDExLjU4NGg4LjI4NGwtMTYuOTE3LTQ1LjUxNEgxODAuMzY4eiBNMTc3LjQ3OSw0NzAuNTk4bDYuMjUyLTE4LjE1NGMwLjIzMi0wLjY5NywwLjQ0NC0xLjY1LDAuNjM1LTIuODU0aDAuMTI3YzAuMjExLDEuMzEyLDAuNDEzLDIuMjY0LDAuNjAzLDIuODU0bDYuMzE2LDE4LjE1NEgxNzcuNDc5eiIvPjxwYXRoIGZpbGw9IiMyODk5QzEiIGQ9Ik0yMjIuNTE3LDQ3OC42OTFjLTAuNDAyLDEuMjctMC42OTgsMi42ODgtMC44ODksNC4yNTNoLTAuMDk1Yy0wLjEyNy0xLjI0OC0wLjQ2Ni0yLjcwOC0xLjAxNi00LjM4bC03LjIwNS0yMi43MjVoLTcuOTk4bDExLjk2NSwzMi41aDcuOTY2bDEyLjU2OC0zMi41aC03Ljc0NEwyMjIuNTE3LDQ3OC42OTF6Ii8+PHBhdGggZmlsbD0iIzI4OTlDMSIgZD0iTTI1NC4zNSw0NTUuMDc4Yy00LjQ4NiwwLTguNDQyLDEuMDE3LTExLjg3LDMuMDQ3djYuNDQzYzMuMTEtMi42NjYsNi42MDItNCwxMC40NzQtNGM0LjQwMSwwLDYuNjAyLDIuMzE3LDYuNjAyLDYuOTUxbC05LjY0OCwxLjM2NWMtNy4wNjcsMS4wMTYtMTAuNjAxLDQuNTkxLTEwLjYwMSwxMC43MjdjMCwyLjg1NywwLjkwNSw1LjE1MywyLjcxMyw2Ljg4OGMxLjgxLDEuNzM1LDQuMzExLDIuNjA0LDcuNTA2LDIuNjA0YzQuMzM3LDAsNy42MjctMS45NDYsOS44NzEtNS44NGgwLjEyN3Y1LjA3OGg3LjE0MXYtMjEuMTM5QzI2Ni42NjQsNDU5LjEyLDI2Mi41Niw0NTUuMDc4LDI1NC4zNSw0NTUuMDc4eiBNMjU5LjU1NSw0NzUuMmMwLDIuMzkzLTAuNzM1LDQuMzc1LTIuMjA2LDUuOTUxYy0xLjQ3MSwxLjU3Ni0zLjMyOCwyLjM2NC01LjU3LDIuMzY0Yy0xLjY1LDAtMi45NjgtMC40MzgtMy45NTEtMS4zMTdjLTAuOTg0LTAuODc4LTEuNDc2LTIuMDA0LTEuNDc2LTMuMzhjMC0xLjg4MywwLjUzNC0zLjIsMS42MDMtMy45NTFjMS4wNjgtMC43NTEsMi42Ni0xLjI2NSw0Ljc3Ni0xLjUzOWw2LjgyNC0wLjk1M1Y0NzUuMnoiLz48cGF0aCBmaWxsPSIjMjg5OUMxIiBkPSJNMjc5LjM1OSw0NDAuNjM3Yy0xLjIwNiwwLTIuMjM3LDAuNDAxLTMuMDk1LDEuMjA3Yy0wLjg1NiwwLjgwNC0xLjI4NSwxLjgwOS0xLjI4NSwzLjAxNXMwLjQyOSwyLjIwMSwxLjI4NSwyLjk4M2MwLjg1NywwLjc4MiwxLjg4OSwxLjE3NCwzLjA5NSwxLjE3NGMxLjI0OCwwLDIuMzA2LTAuNDA2LDMuMTc0LTEuMjIzYzAuODY3LTAuODEzLDEuMzAxLTEuNzkzLDEuMzAxLTIuOTM2YzAtMS4yMDYtMC40MzQtMi4yMTEtMS4zMDEtMy4wMTVDMjgxLjY2Niw0NDEuMDM5LDI4MC42MDcsNDQwLjYzNywyNzkuMzU5LDQ0MC42Mzd6Ii8+PHJlY3QgeD0iMjc1LjY0NiIgeT0iNDU1Ljg0IiBmaWxsPSIjMjg5OUMxIiB3aWR0aD0iNy4zNjMiIGhlaWdodD0iMzIuNSIvPjxyZWN0IHg9IjI5Mi42MjUiIHk9IjQ0MC4yMjUiIGZpbGw9IiMyODk5QzEiIHdpZHRoPSI3LjM5NiIgaGVpZ2h0PSI0OC4xMTUiLz48cGF0aCBmaWxsPSIjMjg5OUMxIiBkPSJNMzIyLjIzOCw0NTUuMDc4Yy00LjQ4NSwwLTguNDQyLDEuMDE3LTExLjg3MSwzLjA0N3Y2LjQ0M2MzLjExMS0yLjY2Niw2LjYwMy00LDEwLjQ3Ni00YzQuMzk5LDAsNi42MDIsMi4zMTcsNi42MDIsNi45NTFsLTkuNjQ3LDEuMzY1Yy03LjA2OCwxLjAxNi0xMC42MDMsNC41OTEtMTAuNjAzLDEwLjcyN2MwLDIuODU3LDAuOTA1LDUuMTUzLDIuNzE0LDYuODg4YzEuODExLDEuNzM1LDQuMzEzLDIuNjA0LDcuNTA4LDIuNjA0YzQuMzM3LDAsNy42MjctMS45NDYsOS44NjktNS44NGgwLjEyN3Y1LjA3OGg3LjE0M3YtMjEuMTM5QzMzNC41NTMsNDU5LjEyLDMzMC40NDcsNDU1LjA3OCwzMjIuMjM4LDQ1NS4wNzh6IE0zMjcuNDQzLDQ3NS4yYzAsMi4zOTMtMC43MzUsNC4zNzUtMi4yMDYsNS45NTFjLTEuNDcyLDEuNTc2LTMuMzI3LDIuMzY0LTUuNTY5LDIuMzY0Yy0xLjY1LDAtMi45NjktMC40MzgtMy45NTEtMS4zMTdjLTAuOTg0LTAuODc4LTEuNDc3LTIuMDA0LTEuNDc3LTMuMzhjMC0xLjg4MywwLjUzMy0zLjIsMS42MDQtMy45NTFjMS4wNjYtMC43NTEsMi42Ni0xLjI2NSw0Ljc3NS0xLjUzOWw2LjgyNC0wLjk1M1Y0NzUuMnoiLz48cGF0aCBmaWxsPSIjMjg5OUMxIiBkPSJNMzYyLjA2OSw0NTUuMDc4Yy00Ljg0NiwwLTguNTI2LDIuMTU4LTExLjA0NSw2LjQ3NmgtMC4xMjd2LTIxLjMyOGgtNy4zNjN2NDguMTE1aDcuMzYzdi00LjY5N2gwLjEyN2MyLjE1OCwzLjY0LDUuMzU0LDUuNDU5LDkuNTg1LDUuNDU5YzQuNTA3LDAsOC4wNjMtMS42MzUsMTAuNjY0LTQuOTAzYzIuNjA0LTMuMjcsMy45MDQtNy42MjIsMy45MDQtMTMuMDYxYzAtNC44ODktMS4xNTgtOC43ODYtMy40NzgtMTEuNjk1QzM2OS4zODUsNDU2LjUzMywzNjYuMTc0LDQ1NS4wNzgsMzYyLjA2OSw0NTUuMDc4eiBNMzY1LjI5MSw0ODAuMDcyYy0xLjU1NiwyLjEyNi0zLjY5NywzLjE4OS02LjQyOSwzLjE4OWMtMi4zMjcsMC00LjI0OC0wLjgyNS01Ljc2LTIuNDc3Yy0xLjUxNC0xLjY0OS0yLjI3LTMuNjYtMi4yNy02LjAyOXYtNC4wMzFjMC0yLjc5MywwLjc5OS01LjEyLDIuMzk2LTYuOTgyYzEuNTk4LTEuODYsMy43MDctMi43OTMsNi4zMzItMi43OTNjMi40NzUsMCw0LjQzOCwwLjkwNSw1Ljg4NywyLjcxNGMxLjQ0OSwxLjgxMSwyLjE3NCw0LjMxMywyLjE3NCw3LjUwN0MzNjcuNjIzLDQ3NC45NzksMzY2Ljg0Niw0NzcuOTQ1LDM2NS4yOTEsNDgwLjA3MnoiLz48cmVjdCB4PSIzODIuNjk5IiB5PSI0NDAuMjI1IiBmaWxsPSIjMjg5OUMxIiB3aWR0aD0iNy4zOTYiIGhlaWdodD0iNDguMTE1Ii8+PHBhdGggZmlsbD0iIzI4OTlDMSIgZD0iTTQyMy41NDgsNDU5LjM2M2MtMi40MzUtMi44NTYtNS44NzItNC4yODUtMTAuMzE1LTQuMjg1Yy00LjQ0MiwwLTguMTYyLDEuNTk0LTExLjE1Niw0Ljc3NmMtMi45OTMsMy4xODUtNC40OSw3LjMwNi00LjQ5LDEyLjM2MmMwLDUuMzU0LDEuMzU4LDkuNTA2LDQuMDc5LDEyLjQ1N2MyLjcxOCwyLjk1MSw2LjQ2OSw0LjQyOCwxMS4yNTEsNC40MjhjNC44NjUsMCw4Ljc4LTAuOTMxLDExLjc0Mi0yLjc5M3YtNS45MzdjLTIuODk4LDIuMDc0LTYuMDgzLDMuMTExLTkuNTU0LDMuMTExYy0zLjA4OSwwLTUuNTE4LTAuODEzLTcuMjgzLTIuNDQ0Yy0xLjc2OC0xLjYyOS0yLjY5Mi0zLjk0NS0yLjc3Ni02Ljk0OWgyMi4xNTJ2LTIuODI1aC0wLjAwMUM0MjcuMTk2LDQ2Ni4xODcsNDI1Ljk3OSw0NjIuMjE5LDQyMy41NDgsNDU5LjM2M3ogTTQwNS4wNDMsNDY4Ljg4NWMwLjMzOC0yLjQ5NywxLjI0MS00LjUxOSwyLjcxNC02LjA2M2MxLjQ3LTEuNTQ0LDMuMjYzLTIuMzE1LDUuMzgtMi4zMTVjMi4xNTgsMCwzLjg1LDAuNzM0LDUuMDc4LDIuMjA0YzEuMjI3LDEuNDcyLDEuODUxLDMuNTI4LDEuODcyLDYuMTc1SDQwNS4wNDN6Ii8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIzMjEuMjAxLDE0MC4wNDYgMzY4LjE3NCwxNDcuNDg1IDM2Ni41NzYsMTM0LjQ3NSAiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjIwMi40MTksMjc4LjY2MSAyMjIuNDUyLDE1Mi4xNyAxODQuNTc0LDE1Ni44MjEgMTk5LjU2NSwyNzguOTI2ICIvPjxwYXRoIGZpbGw9IiMyREE3REYiIGQ9Ik0xODEuOTE0LDMxMS43ODFjMC4yNDIsMS45NjcsMi4wMzMsMy4zNjUsMy45OTgsMy4xMjNsNTUuMDE0LTYuNzU1bDE3Ny45NjcsMjguMTg4YzEuOTU5LDAuMzA5LDMuNzk1LTEuMDI1LDQuMTA1LTIuOTgybDI2LjgxMy0xNjkuMzA3YzAuMzEtMS45NTctMS4wMjItMy43OTUtMi45ODEtNC4xMDVsLTU2LjU0LTguOTU1bC00LjUzNi0zNi45NDFjLTAuMjQyLTEuOTY3LTIuMDMxLTMuMzY1LTMuOTk4LTMuMTI0bC0xMzcuNjg4LDE2LjkwNmwtMTMuNzgyLTIuMTgzYy0xLjk1Ny0wLjMxMS0zLjc5NSwxLjAyNC00LjEwNSwyLjk4MWwtMC4yMjYsMS40MjZsLTYxLjgxLDcuNTg5Yy0xLjk2NSwwLjI0Mi0zLjM2NCwyLjAzMi0zLjEyMSwzLjk5OUwxODEuOTE0LDMxMS43ODF6IE00MDUuNjQ5LDMwNS4yODNsLTExLjE5MS0xNS45ODV2MGwtMTguNzAzLTI2LjcxNWwtMC4wMDEsMGwtMTAuODQtMTUuNDgzYy0wLjQ1MS0wLjY0NC0xLjMyNi0wLjgxNy0xLjk4OC0wLjM5N2wtMzEuNTcsMTkuOTk5aC0wLjAwMmwtNi45MzgsNC4zOTVsLTIuMDYzLTMuNTZsMCwwbC0zMi43MTMtNTYuNDcyYy0wLjIyNy0wLjM5My0wLjYwNS0wLjY1NC0xLjA3MS0wLjcxOWMtMC40NDgtMC4wNjMtMC44OTksMC4wODctMS4yMjQsMC40MDJsLTYxLjk1Nyw2MC40NzNsMTkuMjQ0LTEyMS41MDhsMTgxLjExNiwyOC42ODdsMCwwTDQwNS42NDksMzA1LjI4M3ogTTM2Ni41NzYsMTM0LjQ3NGwxLjU5OCwxMy4wMTJsMCwwbC00Ni45NzMtNy40MzlsLTAuMDAzLDBMMzY2LjU3NiwxMzQuNDc0eiBNMjIyLjQ1MiwxNTIuMTdMMjIyLjQ1MiwxNTIuMTdsLTIwLjAzMywxMjYuNDkxbC0yLjg1NCwwLjI2NWwtMTQuOTkyLTEyMi4xMDRMMjIyLjQ1MiwxNTIuMTd6Ii8+PHBhdGggZmlsbD0iIzJEQTdERiIgZD0iTTM3My4wNTUsMTg3LjIzM0wzNzMuMDU1LDE4Ny4yMzNMMzczLjA1NSwxODcuMjMzYy0xLjA4OS0wLjQwNy0yLjIzMy0wLjcxMi0zLjQyNS0wLjkwMWMtOS42MDMtMS41MjEtMTguNjE1LDUuMDM0LTIwLjEzNiwxNC42MzNjLTEuNTE5LDkuNjAxLDUuMDI4LDE4LjYxNywxNC42MywyMC4xMzhjNC42NDQsMC43MzYsOS4xNDMtMC40MzEsMTIuNzMxLTIuOTA3YzAsMCwwLDAsMC4wMDEsMGwwLDBjMy44MjctMi42MzksNi42MTgtNi43NjksNy40MDMtMTEuNzI0QzM4NS41OSwxOTguMDY1LDM4MC43MjgsMTkwLjEwMywzNzMuMDU1LDE4Ny4yMzN6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQyNS43NDgsMTc4LjM5OWwtMTgxLjExNi0yOC42ODdsLTE5LjI0NCwxMjEuNTA4bDYxLjk1Ny02MC40NzNjMC4zMjUtMC4zMTUsMC43NzYtMC40NjUsMS4yMjQtMC40MDJjMC40NjYsMC4wNjQsMC44NDQsMC4zMjYsMS4wNzEsMC43MTlsMzIuNzEzLDU2LjQ3MmwwLDBsMi4wNjMsMy41Nmw2LjkzOC00LjM5NWgwLjAwMmwzMS41Ny0xOS45OTljMC42NjItMC40MiwxLjUzNy0wLjI0NiwxLjk4OCwwLjM5N2wxMC44NCwxNS40ODNsMC4wMDEsMGwxOC43MDMsMjYuNzE1bDExLjE5MSwxNS45ODRMNDI1Ljc0OCwxNzguMzk5eiBNMzg0LjI2LDIwNi40NzJjLTAuNzg1LDQuOTU1LTMuNTc2LDkuMDg0LTcuNDAzLDExLjcyNGMwLDAtMC4wMDEsMC0wLjAwMSwwdjBjLTMuNTg5LDIuNDc2LTguMDg4LDMuNjQzLTEyLjczMSwyLjkwN2MtOS42MDItMS41MjEtMTYuMTQ4LTEwLjUzNy0xNC42My0yMC4xMzhjMS41MjEtOS41OTksMTAuNTMzLTE2LjE1MywyMC4xMzYtMTQuNjMzYzEuMTkxLDAuMTg5LDIuMzM2LDAuNDk1LDMuNDI1LDAuOTAxbDAsMGwwLDBDMzgwLjcyOCwxOTAuMTAzLDM4NS41OSwxOTguMDY1LDM4NC4yNiwyMDYuNDcyeiIvPjwvZz48L3N2Zz4='\">";
templateEditCell += "							<textarea  class=\"o-feature-img-src\" >{{resourceUrl}}<\/textarea>";
templateEditCell += "							<a id=\"link_{{contentId}}\" class=\"o-feature-change-link\">Change Image<\/a>";
templateEditCell += "						<\/div>";
templateEditCell += "					<\/div>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "				<div class=\"o-feature-button {{hideFeature}}\">";
templateEditCell += "				<div class=\"o-feature-remove-button\" ><a class=\"o-feature-remove\" href=\"javascript:void(0);\"  onclick=\"javascript:window.$featureComponent.prototype.removeItem(\'{{contentId}}\',event)\">Remove<\/a><\/div>";
templateEditCell += "					<div class=\"o-feature-button-group\"> ";

templateEditCell += "						<button class=\"o-feature-cancel\" onclick=\"javascript:window.$featureComponent.prototype.cancelItem(\'{{contentId}}\',event)\">Cancel<\/button>";
templateEditCell += "						<button class=\"o-feature-save\" onclick=\"javascript:window.$featureComponent.prototype.saveItem(\'{{contentId}}\',event)\">Save<\/button>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "			<\/div>";
templateEditCell += '<!--New Discipline Feature & Exchange Mobile App UX Component -->';
templateEditCell += '<div class="o-feature-mobile {{displayMobileFeature}}">';
templateEditCell += "<div class=\"o-feature-sort\"><label>Display Sequence : &nbsp;&nbsp;</label><input type=\"number\" class=\"o-feature-sort-input\" max=\"99\"  min=\"0\" placeholder=\"Set Order\" value='{{displaySequence}}' \/><\/div>";
templateEditCell += '   <div class="o-feature-mobile-left">';
templateEditCell += '       <img class="o-feature-tab" src="../../../images/tab.jpg" width="130"/>';
templateEditCell += '       <a id="" class="o-feature-change-link">Change Image</a>';
templateEditCell += '       <img class="o-feature-app-store" src="../../../images/app-store.png" width="100"/>';
templateEditCell += '       <a id="" class="o-feature-change-link">Change Image</a>';
templateEditCell += '       <img class="o-feature-g-play" src="../../../images/google-play.png" width="100"/>';
templateEditCell += '       <a id="" class="o-feature-change-link">Change Image</a>';
templateEditCell += '   </div>';
templateEditCell += '   <div class="o-feature-mobile-right">';
templateEditCell += '       <div class="o-feature-brand" contenteditable="">{{primaryTitle}}</div>';
templateEditCell += '       <header class="o-feature-title" contenteditable="">{{secondaryTitle}}</header>';
templateEditCell += '       <label class="o-instructor-description-label">Instructor Description</label>';
templateEditCell += '       <div class="o-instructor-description" contenteditable="">{{description}}</div>';
templateEditCell += '       <label class="o-student-description-label">Student Description</label>';
templateEditCell += '       <div class="o-student-description" contenteditable="">{{studentDescription}}</div>';
templateEditCell += '       <label>iTunes Download URL</label>';
templateEditCell += '       <div class="o-itunes-download-url" contenteditable="">{{iTunesDownloadUrl}}</div>';
templateEditCell += '       <label>Android Download URL</label>';
templateEditCell += '       <div class="o-android-download-url" contenteditable="">{{androidDownloadUrl}}</div>';
templateEditCell += '   </div>';
templateEditCell += '   <div class="o-feature-button">';
templateEditCell += '       <div class="o-feature-remove-button">';
templateEditCell += '       <a class="o-feature-remove" href="javascript:void(0);">Remove</a>';
templateEditCell += '       </div>';
templateEditCell += '       <div class="o-feature-button-group">';
templateEditCell += '       <button id="mobileCancelButton" class="o-feature-mobile-cancel" onclick=\"javascript:window.$featureComponent.prototype.cancelMobileItem(\'{{contentId}}\',event)\">Cancel</button>';
templateEditCell += '       <button id="mobileSaveButton" class="o-feature-mobile-save">Save</button>';
templateEditCell += '   </div>';
templateEditCell += '</div>';
templateEditCell += '<div class="o-feature-clearfix"></div>';

module.exports = templateEditCell;