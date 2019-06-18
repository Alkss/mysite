<?php
require_once('DataBase.php');

class StopWatch
{
    private $id;
    private $description;
    private $timer;
    private $date;
    
    public function createNewTrack()
    {
        $db = new DataBase();
        $params = [
            $description = $this->description,
            $timer = $this->timer,
            $date = $this->date
        ];
        $query = "INSERT INTO `tracks` (`description`, `timer`, `date`) VALUES (?,?,?)";
        return $db->insertRow($query, $params);
    }
    
    public function getAllStopWatch()
    {
        $db = new DataBase();
        $query = "SELECT * FROM `tracks`";
        return $db->getRows($query);
    }
    
    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }
    
    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }
    
    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }
    
    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }
    
    /**
     * @return mixed
     */
    public function getTimer()
    {
        return $this->timer;
    }
    
    /**
     * @param mixed $timer
     */
    public function setTimer($timer)
    {
        $this->timer = $timer;
    }
    
    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }
    
    /**
     * @param mixed $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }
    
}