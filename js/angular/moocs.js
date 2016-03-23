var app = angular.module('moocs', []);

var pics  = [
{
    id:'',
    name:"Data Processing Using Python",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/python%E7%8E%A9%E8%BD%AC%E6%95%B0%E6%8D%AE.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6_py%E7%8E%A9%E8%BD%AC%E6%95%B0%E6%8D%AE.png',
    category:'',
    university:"Nanjing University",
    describe:''
},
{
    id:'',
    name:"Introduction to Big Data with Apache Spark",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/introduction-to-big-data-with-apache-spark.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/Berkeley_CS100.1x_IntroSpark.png',
    category:'',
    university:"Berkeley University",
    describe:''
},
{
    id:'',
    name:"Scalable Machine Leaning",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/scalable-machine-learning_378x225.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/Berkeley_CS190.1_ScalableML.png',
    category:'',
    university:"Berkeley University",
    describe:''
},
{
    id:'',
    name:"Business Metrics for Data-Driven Companies",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/business_metric.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/DUKE_BusinessMetrics.png',
    category:'',
    university:"Duke University",
    describe:''
},
{
    id:'',
    name:"Data Analysis and Statistical Inference",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/dasi_logo_small.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/DUKE_DataAnalysisStatisticalInference.png',
    category:'',
    university:"Duke University",
    describe:''
},
{
    id:'',
    name:"Data Visualization and Communication with Tableau",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/tableau.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/DUKE_DataVisualWithTableau.png',
    category:'',
    university:"Duke University",
    describe:''
},
{
    id:'',
    name:"HTML CSS and JAvaScript",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/html_css_javascript_for_coursera.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/HKU_HtmlCssJs.png',
    category:'',
    university:"HKUST",
    describe:''
},
{
    id:'',
    name:"Front-End Web UI Framework and Tools",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/bootstrap.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/HKU_BootStrapAndBrew.png',
    category:'',
    university:"HKUST",
    describe:''
},
{
    id:'',
    name:"Front-End JS Framework-AngularJS",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/pic_angular.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/HKU_AngularJS.png',
    category:'',
    university:"HKUST",
    describe:''
},
{
    id:'',
    name:"R Programming",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/Rprogramming.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/JHU_rProgram.png',
    category:'',
    university:"JohnsHopkins University",
    describe:''
},
{
    id:'',
    name:"Getting and Cleaning Data",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/ObtainingData.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/JHU_getCleanData.png',
    category:'',
    university:"JohnsHopkins University",
    describe:''
},
{
    id:'',
    name:"Exploratory Data Analysis",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/ExploratoryDataAnalysis.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/JHU_exploDataAnalysis.png',
    category:'',
    university:"JohnsHopkins University",
    describe:''
},
{
    id:'',
    name:"Using Python to Access Web Data",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/pythonWebData.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MICHIGAN_PythonAccessWebData.png',
    category:'',
    university:"University of Michigan",
    describe:''
},
{
    id:'',
    name:"Using Databases with Python",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/python_db_tests.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MICHIGAN_PythonDataBases.png',
    category:'',
    university:"University of Michigan",
    describe:''
},
{
    id:'',
    name:"Introduction to Computer Science and Programming Using Python",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/6001x_378x225_0.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MIT6.00.1x_IntroCS.png',
    category:'',
    university:"MIT",
    describe:''
},
{
    id:'',
    name:"Introduction to Computer Thinking and Data Science",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/6.00.2x_computational_thinking_homepage378x225.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MIT6.00.2x_IntroDS.png',
    category:'',
    university:"MIT",
    describe:''
},
{
    id:'',
    name:"The Analytics Edge",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/15.071x_analytics_course_image_378x225.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MIT15.071x_AnalyticsEdge.png',
    category:'',
    university:"MIT",
    describe:''
},
{
    id:'',
    name:"Calculus 1A",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/integral_calculus_378x225.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MIT18.01.1x_Calculus1A.png',
    category:'',
    university:"MIT",
    describe:''
},
{
    id:'',
    name:"Machine Leaning Foundations",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/ntu_%E5%9F%BA%E7%9F%B3.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/NTU_%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%9F%BA%E7%9F%B3.png',
    category:'',
    university:"National Taiwan University",
    describe:''
},
{
    id:'',
    name:"Machine Leaning Techniques",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/ntu_%E6%8A%80%E6%B3%95.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/NTU_%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%8A%80%E6%B3%95.png',
    category:'',
    university:"National Taiwan University",
    describe:''
},
{
    id:'',
    name:"Mining Massive Datasets",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/mmds_logo2.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/STU_MiningMassiveDatasets.png',
    category:'',
    university:"Stanford University",
    describe:''
},
{
    id:'',
    name:"Machine Leaning",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/ng-ml.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/STU_ML.png',
    category:'',
    university:"Stanford University",
    describe:''
},
{
    id:'',
    name:"Introduction to Big Data",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/intro-big-data-_2_.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/UCSanDiego_IntroToBigData.png',
    category:'',
    university:"UC SanDiego",
    describe:''
},
{
    id:'',
    name:"Machine Learning Foundations",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/W_ML_foundation.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/UW_MLFoundation.png',
    category:'',
    university:"University of Washington",
    describe:''
},
{
    id:'',
    name:"Machine Learning Regression",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/W_regression.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/UW_MLRegression.png',
    category:'',
    university:"University of Washington",
    describe:''
},
{
    id:'',
    name:"Big Data, Cloud Computeing and CDN",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/cdn.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/YONSEI_CloudBigDataCDN.png',
    category:'',
    university:"Yonsei University",
    describe:''
},
{
    id:'',
    name:"Internet Emerging Technologies",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/it.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/YONSEI_InternetTechs.png',
    category:'',
    university:"Yonsei University",
    describe:''
},
{
    id:'',
    name:"Introduction to Meteor.js Development",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/og-image-logo.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/MeteorDevelopment.pdf_1.Jpeg',
    category:'',
    university:"London University",
    describe:''
},
{
    id:'',
    name:"Multiplatform Mobile App Development with Web Technologies",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/ionic.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/02240841579CourseraBEBHRPMG2QS5.pdf_1.Jpeg',
    category:'',
    university:"HKUST",
    describe:''
},
{
    id:'',
    name:"Microeconomics: The Power of Markets",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/microeconomics.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/Microeconomic.Jpeg',
    category:'',
    university:"University of Pennsylvania",
    describe:''
},
{
    id:'',
    name:"Experiment For Improvement",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/StatsMOOCLogo2c.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/McMaster_ExperimentForImprovement.Jpeg',
    category:'',
    university:"McMaster University",
    describe:''
},
{
    id:'',
    name:"Experiment For Improvement",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/large-icon.png',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/DUKE_ImageAndVideoProcessing.jpg',
    category:'',
    university:"Duke University",
    describe:''
},
{
    id:'',
    name:"Principles of Economics with Calculus",
    courseUrl:'http://7xqung.com1.z0.glb.clouddn.com/CaltechX%2BEc1011x%2B1T2016%2Btype%40thumbnail%2Bblock%40large-icon-png-375x200.jpg',
    certiUrl:'http://7xqung.com1.z0.glb.clouddn.com/03231027518CaltechX_PrinciplesOfEconomics.pdf_1.Jpeg',
    category:'',
    university:"Caltech",
    describe:''
}
];





app.controller('myCtrl', function($scope) {
    $scope.pics= pics;
});


$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  var name = button.data('name');
  var srcpic = button.data('srcpic');
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('#courseImg').attr("src", srcpic);
  modal.find('#courseName').text(name);
  // modal.find('.modal-body input').val(recipient);
})