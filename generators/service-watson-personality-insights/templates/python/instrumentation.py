from ibmcloudenv import IBMCloudEnv
from watson_developer_cloud import PersonalityInsightsV3

personality_insights = PersonalityInsightsV3(
    username=IBMCloudEnv.getString('watson_personality_insights_username'),
    password=IBMCloudEnv.getString('watson_personality_insights_password'),
    version='2016-10-20')
<% if (bluemix.backendPlatform.toLowerCase() === 'python') { %>
def getService(app):
    return 'watson-personality-insights', personality_insights
<% } else { %>
def getService():
    return 'watson-personality-insights', personality_insights
<% } %>
