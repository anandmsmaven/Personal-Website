 /**
     * Purpose: Function to download the resume which is of PDF type
     * @param data (FILE): File to attach in the header
     */
<?php
$filename = "Anand-resume.pdf"; // downloaded file name is defined
$file='resume/Rajendran_anand_resume.pdf'; //File to download
               
$len = filesize($file); // Calculate File Size
ob_clean();
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Cache-Control: public"); 
header("Content-Description: File Transfer");
header("Content-Type:application/pdf"); // Send type of file
$header="Content-Disposition: attachment; filename=$filename;"; // Send File Name
header($header );
header("Content-Transfer-Encoding: binary");
header("Content-Length: ".$len); // Send File Size
@readfile($file);   
exit;
?>